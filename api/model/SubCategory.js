const mongoose = require('mongoose')

const subCategorySchema = mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
    subCategoryName:{type:String,require:true}
})

module.exports = mongoose.model('SubCategory',subCategorySchema)