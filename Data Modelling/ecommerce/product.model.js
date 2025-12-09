import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name:{
      type: String,
      required: true,
    },
    productImage:{
      type:String//Image URL to be supplied
    },
    price:{
      type:Number,
      deafult:0
    },
    stock:{
      type:Number,
      deafult:0
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category"
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);

export const Product = mongoose('Product', productSchema);
