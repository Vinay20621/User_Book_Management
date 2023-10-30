const express = require('express')
const router=express.Router()
const {signUp,login}=require('../controller/user')


router.post('/signin',signUp)
router.post('/login',login)









module.exports=router