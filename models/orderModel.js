const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"},
    products:[
        {
            product_id:{
                type:String,
                required:true
            },
            quantity:{
                type:String,
                required:true
            }
        }
    ],
    price:{type:String,required:true},
    address:{type:String,required:true},
    status:{type:String,default:"pending"},
    dateOrdered: {
      type: Date,
      default: Date.now,
  },
  },
  {
    timestamps: true,
  })
module.exports = mongoose.model('order', orderSchema);