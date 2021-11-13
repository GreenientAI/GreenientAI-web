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
const UsersController = __importStar(require("../controllers/Users.controller"));
const router = express_1.default.Router();
/**
 * @route GET /
 * @desc Get all users
 * @access Private
 */
router.get('/', UsersController.GET_USERS);
/**
 * @route GET /:id
 * @desc Get a specific user
 * @access Private
 */
router.get('/:id', UsersController.GET_USER_BY_ID);
/**
 * @route PATCH /:id
 * @desc Edit a specific user
 * @access Private
 */
router.patch('/:id', UsersController.EDIT_USER);
/**
 * @route DELETE /:id
 * @desc Delete a specific user
 * @access Private
 */
router.delete('/:id', UsersController.DELETE_USER);
exports.default = router;
