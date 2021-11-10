"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController = __importStar(require("../controllers/AuthController"));
const verifyEmailAndPassword_1 = __importDefault(require("../middleware/verifyEmailAndPassword"));
const router = express_1.default.Router();
/**
 * @route POST /login
 * @desc Login a user using an email and password
 * @access Public
 */
router.post('/login', verifyEmailAndPassword_1.default, AuthController.LOGIN_USER);
/**
 * @route POST /register
 * @desc Register a user using a name, email, and password
 * @access Public
 */
router.post('/register', verifyEmailAndPassword_1.default, AuthController.REGISTER_USER);
exports.default = router;
