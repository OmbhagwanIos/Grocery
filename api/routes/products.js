const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')

const Product = require('../model/Product')


route.post('/createProduct',(req,res) =>{

    const product = new Product({
        subCategoryProduct:req.body.subCategoryProduct,
        productName:req.body.productName,
        productWeight:req.body.productWeight,
        productPrice:req.body.productPrice,
        productSavingMoney:req.body.productSavingMoney
    })

    product.save()
    .then(res.status(200).json('product added successfully'))
    .catch(err => {
        res.status(500).json(err)
    })
})

route.get('/:subCategoryId',(req,res) => {

   Product.find({subCategoryProduct:req.params.subCategoryId})
   .select('subCategoryProduct productName productWeight productPrice productSavingMoney _id')
   .exec()
   .then(response => {
       res.status(200).json(response)
   })
   .catch(err => {
       res.status(500).json(err)
   })
})


module.exports = route