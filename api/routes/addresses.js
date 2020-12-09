const express = require('express')

const route = express.Router()


const Address = require('../model/Address')

route.post('/createAddress',(req,res) => {
    const address = new Address({
        user:req.body.user,
        name:req.body.name,
        houseNo:req.body.houseNo,
        streetName:req.body.streetName,
        landmarkCity:req.body.landmarkCity
    })
    address.save().then(response => {
        const addressJson = {
            message:'Address created.'
        }
        res.status(200).json(addressJson)
    }).catch(error => {
        const err = {
            message:err.message
        }
        res.status(500).json(err)
    })
})

route.get('/:userId',(req,res) => {
    Address.find({user:req.params.userId})
    .exec()
    .then(response => {
        if (response.length == 0) {
            res.status(200).json('Not Found')
        }
        else{
           res.status(200).json(response)
        }
        
    })
    .catch(error => {
        res.status(500).json(error)
    })
})



module.exports = route

