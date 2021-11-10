"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyEmailAndPassword = (req, res, next) => {
    const { email, password } = req.body;
    // Make sure that both an email and password are provided
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
    // Make sure that the email is valid
    if (!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)) {
        return res.status(401).json({
            message: 'Please enter a valid email',
        });
    }
    // Make sure that the password is at least 8 characters for security
    if (password.length < 8) {
        return res.status(401).json({
            message: 'Password must be at least 8 characters long',
        });
    }
    return next();
};
exports.default = verifyEmailAndPassword;
