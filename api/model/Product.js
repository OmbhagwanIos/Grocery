const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    subCategoryProduct:{type:mongoose.Schema.Types.ObjectId,ref:'SubCategory'},
    productName:{type:String,required:true},
    productWeight:{type:String,required:true},
    productPrice:{type:Number,required:true},
    productSavingMoney:{type:String,required:true}
})

module.exports = mongoose.model('Product',productSchema)