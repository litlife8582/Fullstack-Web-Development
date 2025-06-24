const express = require('express')
const router=express.Router()
const app = express()
const port = 3000


const middleware = function(req, res, next) {
  console.log("Time:",Date.now())   
  // res.send("Hacked by the middleware")
  next()
}

router.use(middleware)

router.get('/blog', (req, res) => {
  res.send('Page about my blogs!')
})

router.get('/about', (req, res) => {
  res.send('This webpage contains various informations about geopolitical changes')
})


module.exports = router