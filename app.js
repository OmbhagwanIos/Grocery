const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const mysql = require('mysql')
const dotenv = require('dotenv')


const userRoute = require('./api/routes/users')
const categoryRoute = require('./api/routes/categories')
const subcategoryRoute = require('./api/routes/subcategories')
const productRoute = require('./api/routes/products')
const addressRoute = require('./api/routes/addresses')
dotenv.config()


 mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true,useUnifiedTopology: true},() =>{
     console.log('connected to db')
 })


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

 app.use('/api/user',userRoute)
 app.use('/api/category',categoryRoute)
 app.use('/api/subcategory',subcategoryRoute)
 app.use('/api/product',productRoute)
 app.use('/api/address',addressRoute)


module.exports = app



