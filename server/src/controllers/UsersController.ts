import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.model';
import Changeable from '../ts/enums/UserEnum';

export const GET_USER_BY_ID = async (req: Request, res: Response) => {
  const { id } = req.params;
    try {
      const user = await User.findById(id).select('-password');

      res.status(200).send(user);
    } catch (error) {
      res.status(404).json({
        message: 'A user with that id was not found',
      });
    }
};

export const GET_USERS = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password');
    const userCount = users.length;

    res.status(200).json({
      userCount,
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Please try again',
    });
  }
}

export const EDIT_USER = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { password, name } = req.body;
  const { change } = req.query;

  if (password || name) {
    switch (change) {
      case Changeable.PASSWORD:
        try {
          const hash = await bcrypt.hash(password, 10);

          if (password.length < 8) {
            throw new Error('Password must be at least 8 characters long');
          }

          User.findOneAndUpdate({ _id: id }, { password: hash })
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
        } catch (error) {
          res.send(error);
        }
        break;
      case Changeable.NAME:
        User.findOneAndUpdate({ _id: id }, { name })
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
  } else {
    res.status(400).json({
      message: 'Can only update name, or password',
    });
  }

  function editUser(_id: string, type: Changeable, update: string) {
    const updateObject = JSON.parse(`{
      "${type}": "${update}"
    }`);

    User.findOneAndUpdate({ _id }, updateObject)
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
};

export const DELETE_USER = async (req: Request, res: Response) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then((user) => {
      if (user) {
        res.status(200).json({
          user,
          message: 'User deleted successfully',
        });
      }
    })
    .catch(() => {
      res.status(400).json({
        message: 'A user with that id does not exist',
      });
    });
};