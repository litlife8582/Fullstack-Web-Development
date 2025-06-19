const { error } = require("console")
const fs=require("fs")

console.log(fs)

console.log("Starting")
fs.writeFileSync("Mayukh.txt","Mayukh is a good boy")
console.log("Ending")

console.log("Starting")
fs.writeFile("Mayukh2.txt","Mayukh is a good boy2",()=>{
    console.log("Done")
    fs.readFile("Mayukh2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
console.log("Ending")


console.log("Starting")
fs.appendFile("Mayukh.txt","Mayukh Developer",(e,d)=>{
    console.log(d)
})
console.log("Ending")