import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

import { User } from './user';

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: { 
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['open', 'in progress', 'resolved'],
    default: 'open'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastUpdate: {
    type: Date,
    default: null
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: User
  }
});

TodoSchema.plugin(mongoosePaginate);
export const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
