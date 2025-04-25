import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
