import fs from "fs/promises"

let a= fs.readFile("Mayukh3.txt")

let b=fs.writeFile("Mayukh3.txt","My name is Mayukh Sarkar")

console.log(a.toString(),b)