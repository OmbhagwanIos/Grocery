const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
     categoryName:{type:String,requried:true}
})

module.exports = mongoose.model("Category",categorySchema)




// _id:mongoose.Types.ObjectId(),
// product:req.body.productId,
// quantity: req.body.qunatity