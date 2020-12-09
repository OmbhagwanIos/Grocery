const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const Joi = require('@hapi/joi')
const bcrypt = require('bcryptjs')

const User = require('../model/User')



const schema = Joi.object({
     name:Joi.string().required().min(6),
     email:Joi.string().required().email().min(6),
     password:Joi.string().required().min(6),
     phone:Joi.string().min(10).max(10).required()
 });

 //register
route.post('/register',async (req,res) => {

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        phone:req.body.phone
    })
    try{
        const savedUser = await user.save()
        res.status(200).send(savedUser)
    }
    catch(err){
       res.status(400).send(err)
   }
})

//login
route.post('/login',async (req,res) => {

    const user = await User.findOne({email:req.body.email})
    if (!user) return res.status(400).send('email is invalid')

    const validPassword = await bcrypt.compare(req.body.password,user.password)
    if (!validPassword) return res.status(400).send('password is invalid')

    res.status(200).send('Logged In.')

})

module.exports = route