import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import Employee from './models/employees.js';

const _filename=fileURLToPath(import.meta.url);
const _dirname=path.dirname(_filename);

const app=express();
const port=3000;

app.set('view engine','ejs');
app.set("views",path.join(_dirname,"views"));

app.use(express.static(path.join(_dirname,"public")));
app.use(express.urlencoded({extended:true}));

await mongoose.connect("mongodb://localhost:27017/employeeData");

app.get('/', async(req, res) => {
  const employees=await Employee.find();
  res.render("index",{employees});
});

app.post("/generate",async(req,res)=>{
  const roles=["Developer","Manager","Analyst"];
  const randomName="Employee"+Math.floor(Math.random()*1000);
  const randomAddress="Address_"+Math.floor(Math.random()*1000);
  const randomRole=roles[Math.floor(Math.random()*roles.length)];

  const emp=new Employee({
    name:randomName,
    address:randomAddress,
    role:randomRole
  });
  await emp.save();
  res.redirect("/");
});

app.post("/delete-db",async(req,res)=>{
  await mongoose.connection.dropDatabase();
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})
    