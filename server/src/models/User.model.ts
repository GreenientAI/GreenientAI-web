import mongoose, { Schema } from 'mongoose';
import IUser from '../ts/interfaces/UserInterface';

const UserSchema: Schema<IUser> = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
