import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send('Server is ready!');
});
 
app.get('/api/content',(req,res)=>{
    const content=[
        {
            id:1, 
            title:"1st content",
            material:"This is content 1"
        },
        {
            id:2, 
            title:"2nd content",
            material:"This is content 2"
        },
        {
            id:3, 
            title:"3rd content",
            material:"This is content 3"
        },
        {
            id:4, 
            title:"4th content",
            material:"This is content 4"
        },
        ]
        res.json(content);
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});