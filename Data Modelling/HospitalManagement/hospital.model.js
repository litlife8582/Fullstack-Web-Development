import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specialization: [
      {
        type: String,
      },
    ],
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
  },
  { timestamps: true }
);

export const Hospital = new mongoose.model('Hospital', hospitalSchema);
