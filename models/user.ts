  
import mongoose from 'mongoose';
import { mongo } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const UserSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    default: 'sem_foto.png'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
UserSchema.plugin(mongoosePaginate);
export const User = mongoose.models.User || mongoose.model('User', UserSchema);
