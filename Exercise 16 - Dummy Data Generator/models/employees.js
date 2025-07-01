import Mongoose from "mongoose";


const employeeSchema=new Mongoose.Schema({
    name:String,
    address:String,
    role:String
})

const Employee=Mongoose.model("Employee",employeeSchema);
export default Employee;