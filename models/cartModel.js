const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    product_id:{
      type:String,required:true},
    product_name:{type:String,required:true},
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"},
    price:{
      type:String,required:true
    },
    quantity:{
      type:Number,
      default:1
    }
  },
  {
    timestamps: true,
  })
module.exports = mongoose.model('Cart', cartSchema);