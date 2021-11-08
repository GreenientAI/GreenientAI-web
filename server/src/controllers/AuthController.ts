import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import User from '../models/User.model';
import IUser from '../ts/interfaces/UserInterface';

// Login user through email and password
export const LOGIN_USER = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

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

  if (password.length < 8) {
    return res.status(401).json({
      message: 'Password must be at least 8 characters long',
    });
  }

  if (!user) {
    return res.status(401).json({
      message: 'An account with that email does not exist',
    });
  }

  const passwordVerified = await bcrypt.compare(password, user.password);

  const jwtPayload = {
    _id: user._id,
  };

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
};

// Register user through name, grade, email, and password
export const REGISTER_USER = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });


    if (user) {
        return res.status(409).json({
          message: 'An account with that email already exists',
        });
    }

    let hash = '';
    try {
      hash = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        message: 'Could not properly hash the password. Please try again',
      });
    }

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    newUser.save().then((userInfo: IUser) => {
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
};

export const GENERATE_TOKEN = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).send({
      message: 'No token supplied',
    });
  }

  const payload: JwtPayload = jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_KEY as string,
  ) as JwtPayload;

  const { _id, iat, exp } = payload;

  const accessToken = createTokens({ _id }, false);

  return res.status(200).json({
    accessToken,
    tokenInfo: {
      iat,
      exp,
    },
  });
};

/* ================================= HELPER FUNCTIONS ================================= */
function createTokens(jwtPayload: object, both: boolean) {
  const accessTokenOptions: SignOptions = {
    expiresIn: '15m',
  };

  const accessToken = jwt.sign(jwtPayload, process.env.JWT_KEY as string, accessTokenOptions);

  if (both) {
    const refreshTokenOptions: SignOptions = {
      expiresIn: '30d',
    };

    const refreshToken = jwt.sign(
      jwtPayload,
      process.env.JWT_REFRESH_KEY as string,
      refreshTokenOptions,
    );

    return { accessToken, refreshToken };
  }
  return accessToken as any;
}