import mongoose from 'mongoose';

const todosSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    email: {
      type: Boolean,
      default: false
    },
    subtodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

export const Todos = mongoose.model('Todos', todosSchema);
