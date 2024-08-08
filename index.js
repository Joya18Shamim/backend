require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/twitter',(req,res) => {
    res.send('joyashamimcomm')
})

app.get('/login',(req,res)=> {
    res.send('<h1>Login hereee</h1>')
})



app.listen(process.env.PORT,() => {
    console.log(`app listening on port ${port}`)
})