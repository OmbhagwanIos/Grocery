const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')

const SubCategory = require('../model/SubCategory')
const Category = require('../model/Category')

route.post('/',(req,res) => {

    const subcategory = new SubCategory({
        product:req.body.product,
        subCategoryName:req.body.subCategoryName
    })

    subcategory.save().then(reponse => {
        res.status(200).json(reponse)
    }).catch(err => {
        res.status(400).json(err)
    })
})

route.get('/:productId',(req,res) => {
    console.log(req.params.productId)
   SubCategory.find({product:req.params.productId})
   .exec()
   .then(response => {
       res.status(200).json(response)
   })
   .catch(err => {
       res.status(500).json(err)
   })
})


module.exports = route
