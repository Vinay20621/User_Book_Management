const express = require('express')
const router=express.Router()

const {addPage,allBook,deleteBook,updateBook,myBook}=require('../controller/book')
router.post('/add',addPage)
router.get('/allbook',allBook)
router.get('/mybook/:id',myBook)
router.post('/updatebook/:id',updateBook)
router.get('/delete/:id',deleteBook)







module.exports=router