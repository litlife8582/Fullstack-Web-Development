const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');

app.get('/', (req, res) => {
  let sitename="Adidas"
  let searchText="Search Now"
  let arr=["hey",54,65]
  res.render('index',{sitename:sitename,searchText:searchText,arr})
})

app.get('/blog/:slug',(req,res)=>{
  let blogTitle="This is the blogTitle"
  let blogContent="This is the content of the blog"
  res.render("blogpost",{blogTitle:blogTitle,blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
