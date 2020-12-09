const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const Category = require('../model/Category')

route.post('/createcategory',(req,res) => {
    const category = new Category({
        categoryName:req.body.categoryName
    })
    category.save().then(response => {
        res.status(200).json('category created')
    })
})

route.get('/allCategory',(req,res) => {
    Category.find()
    .exec()
    .then(reponse => {
        const categroy = {
            allCategroy:reponse
        }
        res.status(200).json(categroy)
    })
    .catch(err => {
        const error = {
            error: err
        }
        res.status(400).json(error)
    })
})

module.exports = route
