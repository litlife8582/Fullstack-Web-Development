const express = require('express')
const app = express()
const port = 3000


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
  res.send('Hello World2!')
})

app.get('/home', (req, res) => {
  res.send('Welcome to the home page')
})

app.get('/about', (req, res) => {
  res.send('Welcome!')
})

app.get('/contact', (req, res) => {
  res.send('Hello World2!')
})

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
