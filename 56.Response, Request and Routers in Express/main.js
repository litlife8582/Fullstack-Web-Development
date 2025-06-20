const express = require("express");
const blog = require('./routes/blog')
const app = express();
const port = 3000;


app.use(express.static("public"));
app.use('/blog', blog)

app.get("/", (req, res) => {
  console.log("This is a get request");
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("This is a post request");
  res.send("Hello World!");
});

app.get("/index", (req, res) => {
  console.log("This is a get request");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("This is a get request");
  res.json({
  "name": "Mayukh",
  "age": 21,
  "isStudent": true,
  "skills": ["C", "C++", "JavaScript"],
  "address": {
    "city": "Siliguri",
    "state": "West Bengal"
  }
});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
