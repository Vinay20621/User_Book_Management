const express = require('express')
const {PORT}=require('./config/index')
const userRoute=require('./routes/user')
const homeRoute=require('./routes/book')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const router=require('router')
const connect=require('./database/index')
const auth =require('./middlewear/auth')



const app=express()
// cors is used to communicate between frontent and backend
app.use(cors(
    // {
    //     origin:["https://frontent.onrender.com"],
    //     methods:["POST","GET"],
    //     credentials:true
    // }
))

app.use(express.json())

connect()
app.use(router())
app.use(cookieParser())

app.use('/user',userRoute)
// auth apply on every book operation
app.use('/book',auth,homeRoute)



app.listen(PORT,()=>
{
    console.log(`server is running at port ${PORT}`)
})
