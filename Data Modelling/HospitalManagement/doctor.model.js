import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  degree: {
    type: String,
    enum: ['MBBS', 'MD', 'MS', 'DM'],
    required: true,
  },
  specialization: {
    type: String,
    required: function () {
      return ['MD', 'MS', 'DM'].include(this.degree);
    },
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = new mongoose.model('Doctor', doctorSchema);
