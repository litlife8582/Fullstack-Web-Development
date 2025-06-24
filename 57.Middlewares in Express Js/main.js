const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")

app.use(express.static("public"))

const middleware = function(req, res, next) {
  fs.appendFileSync("log.txt",`${Date.now()} and ${req.method}\n`)
  console.log(`${Date.now()} and ${req.method}`)
  // res.send("Hacked by the middleware")
  next()
}

app.use(middleware)//logger for the website

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/contact', (req, res) => {
  res.send('Contact Page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
