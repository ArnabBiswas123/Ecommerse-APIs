const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');
const Cart = require('../models/cartModel')

const Addtocart = async (req, res) => {
    try {
        const id = new ObjectId(req.body.productId);
       
        const fetched_data = await mongoose.connection.db.collection('foodData').find({ _id: id }).toArray();
        // console.log(fetched_data)
        if (fetched_data.length === 0) {
            return res.json({ success: false, msg: 'the product is not avaliable' })
        }
        const cart_data = await Cart.find({$and:[{user: req.user._id, product_id: req.body.productId }]})
        // console.log(cart_data)
        if (cart_data.length>0) {
            return res.json({ success: true, msg: "Already added into the cart" })
        }
        const newCart = await Cart.create({
            product_id: req.body.productId,
            product_name: fetched_data[0].name,
            user: req.user._id,
            price: fetched_data[0].price
        })
        res.json({ success: true, cart: newCart })
    }
    catch (error) {
        res.status(400).send({ msg: error.message });
    }
}
module.exports = Addtocart