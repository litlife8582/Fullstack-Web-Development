import mongoose from "mongoose"

const patientSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  diagnosedWith:{
    tyoe:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  gender:{
    True:String,
    enum:["Male","Female","Others"],
    required:true
    },
    Hospital:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    }
  }
},{timestamps:true})

export const Patient=new mongoose.model("Patient",patientSchema)