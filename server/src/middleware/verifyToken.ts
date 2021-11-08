import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const rawToken = req.headers.authorization;

  // Remove the Bearer from the token
  const token = rawToken?.split(' ')[1];

  try {
    if (!rawToken || !token) {
      return res.status(401).json({
        message: 'No token provided, authorization denied',
      });
    }

    const jwtKey = process.env.JWT_KEY;

    let decoded;
    if (typeof token === 'string' && typeof jwtKey === 'string') {
      decoded = jwt.verify(token, jwtKey);
    }

    (req as any).userData = decoded;

    return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export default verifyToken;