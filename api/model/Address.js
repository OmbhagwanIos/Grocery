const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    name:{type:String,requried:true},
    houseNo:{type:String,requried:true},
    streetName:{type:String,requried:true},
    landmarkCity:{type:String,requried:true}
})

module.exports =  mongoose.model('Address',addressSchema)