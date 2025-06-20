const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
/**Syntax:
 * app.get/app.post./app.put/app.delete(path,handler)
 * 
 * '/'-> is the path
 * 
 * and
 * 
 *  
 *  (req, res) => {
  res.send('Hello World!')
    } ---> is the handler
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send('Welcome to the home page')
})

app.get('/about', (req, res) => {
  res.send('Welcome to the about page')
})

app.get('/contact', (req, res) => {
  res.send('Welcome to the contact page')
})

app.get('/contact/:name', (req, res) => {
  // console.log(req)
  console.log(req.params)
  console.log(req.query)
  res.send(`Welcome to the ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log('Static files served from:', __dirname + '/public');
