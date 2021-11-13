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
exports.DELETE_USER = exports.EDIT_USER = exports.GET_USERS = exports.GET_USER_BY_ID = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_model_1 = __importDefault(require("../models/User.model"));
const UserEnum_1 = __importDefault(require("../ts/enums/UserEnum"));
const GET_USER_BY_ID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_model_1.default.findById(id).select('-password');
        res.status(200).send(user);
    }
    catch (error) {
        res.status(404).json({
            message: 'A user with that id was not found',
        });
    }
});
exports.GET_USER_BY_ID = GET_USER_BY_ID;
const GET_USERS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_model_1.default.find().select('-password');
        const userCount = users.length;
        res.status(200).json({
            userCount,
            users,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Please try again',
        });
    }
});
exports.GET_USERS = GET_USERS;
const EDIT_USER = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { password, name } = req.body;
    const { change } = req.query;
    if (password || name) {
        switch (change) {
            case UserEnum_1.default.PASSWORD:
                try {
                    const hash = yield bcryptjs_1.default.hash(password, 10);
                    if (password.length < 8) {
                        throw new Error('Password must be at least 8 characters long');
                    }
                    User_model_1.default.findOneAndUpdate({ _id: id }, { password: hash })
                        .then((user) => {
                        res.status(200).json({
                            user,
                            updated: {
                                password: hash,
                            },
                        });
                    })
                        .catch(() => {
                        res.status(400).json({
                            message: 'Error updating the password of the user with that id',
                        });
                    });
                }
                catch (error) {
                    res.send(error);
                }
                break;
            case UserEnum_1.default.NAME:
                User_model_1.default.findOneAndUpdate({ _id: id }, { name })
                    .then((user) => {
                    res.status(200).json({
                        user,
                        updated: { name },
                    });
                })
                    .catch(() => {
                    res.status(400).json({
                        message: 'Error updating the name of the user with that id',
                    });
                });
                break;
            default:
                res.status(400).json({
                    message: 'You can only change the name or password',
                });
        }
    }
    else {
        res.status(400).json({
            message: 'Can only update name, or password',
        });
    }
    function editUser(_id, type, update) {
        const updateObject = JSON.parse(`{
      "${type}": "${update}"
    }`);
        User_model_1.default.findOneAndUpdate({ _id }, updateObject)
            .populate('schoolDetails tutorDetails info')
            .then((user) => {
            res.status(200).json({
                message: 'Updated user successfully',
                oldUser: user,
                updated: updateObject,
            });
        })
            .catch(() => {
            res.status(400).json({
                message: `Error updating the ${type} of the user with that id`,
            });
        });
    }
});
exports.EDIT_USER = EDIT_USER;
const DELETE_USER = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_model_1.default.findById(id);
    if (user) {
        const userDeleted = yield User_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            user,
            message: 'User deleted successfully',
        });
    }
    else {
        res.status(400).json({
            message: 'A user with that id does not exist',
        });
    }
});
exports.DELETE_USER = DELETE_USER;
