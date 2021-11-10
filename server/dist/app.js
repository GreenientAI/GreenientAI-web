"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
const router = express_1.default.Router();
const app = express_1.default();
mongoose_1.default.connect(process.env.MONGO_URI);
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/v1', router);
router.use('/', index_1.default);
router.use('/auth', auth_1.default);
router.use('/users', users_1.default);
app.use("*", (req, res) => {
    res.status(404).json({
        message: "404 Not Found"
    });
});
module.exports = app;
