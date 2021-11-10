"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_TOKEN = exports.REGISTER_USER = exports.LOGIN_USER = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_model_1 = __importDefault(require("../models/User.model"));
// Login user through email and password
const LOGIN_USER = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Fetch the user with the email provided
    const user = yield User_model_1.default.findOne({ email });
    // Make sure that both email and password are provided
    if (!email || !password) {
        if (!email) {
            return res.status(401).json({
                message: 'Please enter an email',
            });
        }
        if (!password) {
            return res.status(401).json({
                message: 'Please enter a password',
            });
        }
        return res.status(401).json({
            message: 'Please enter both the email and password',
        });
    }
    // Make sure that the password is at least 8 characters for security
    if (password.length < 8) {
        return res.status(401).json({
            message: 'Password must be at least 8 characters long',
        });
    }
    // Check if the user has an account
    if (!user) {
        return res.status(401).json({
            message: 'An account with that email does not exist',
        });
    }
    const passwordVerified = yield bcryptjs_1.default.compare(password, user.password);
    const jwtPayload = {
        _id: user._id,
    };
    // If the password is correct, grant access through JWT
    if (passwordVerified) {
        const { accessToken, refreshToken } = createTokens(jwtPayload, true);
        return res.status(201).send({
            message: 'Logged in successfully',
            user,
            token: {
                accessToken,
                refreshToken,
            },
            auth: true,
        });
    }
    return res.status(401).json({
        message: 'Not Authenticated',
        auth: false,
    });
});
exports.LOGIN_USER = LOGIN_USER;
// Register user through name, email, and password
const REGISTER_USER = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const user = yield User_model_1.default.findOne({ email });
    // Check if the user is already registered
    if (user) {
        return res.status(409).json({
            message: 'An account with that email already exists',
        });
    }
    let hash = '';
    try {
        hash = yield bcryptjs_1.default.hash(password, 10);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Could not properly hash the password. Please try again',
        });
    }
    const newUser = new User_model_1.default({
        name,
        email,
        password: hash,
    });
    // Save the user in the mongodb database
    newUser.save().then((userInfo) => {
        const jwtPayload = {
            _id: userInfo._id,
        };
        const { accessToken, refreshToken } = createTokens(jwtPayload, true);
        return res.status(201).send({
            message: 'User Created',
            user: userInfo,
            tokens: {
                accessToken,
                refreshToken,
            },
            auth: true,
        });
    });
    // Will never be reached
    return null;
});
exports.REGISTER_USER = REGISTER_USER;
const GENERATE_TOKEN = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Refresh token allows for extended log in time
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(400).send({
            message: 'No token supplied',
        });
    }
    const payload = jsonwebtoken_1.default.verify(refreshToken, process.env.JWT_REFRESH_KEY);
    const { _id, iat, exp } = payload;
    const accessToken = createTokens({ _id }, false);
    return res.status(200).json({
        accessToken,
        tokenInfo: {
            iat,
            exp,
        },
    });
});
exports.GENERATE_TOKEN = GENERATE_TOKEN;
/* ================================= HELPER FUNCTIONS ================================= */
function createTokens(jwtPayload, both) {
    const accessTokenOptions = {
        expiresIn: '15m',
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, process.env.JWT_KEY, accessTokenOptions);
    if (both) {
        const refreshTokenOptions = {
            expiresIn: '30d',
        };
        const refreshToken = jsonwebtoken_1.default.sign(jwtPayload, process.env.JWT_REFRESH_KEY, refreshTokenOptions);
        return { accessToken, refreshToken };
    }
    return accessToken;
}
