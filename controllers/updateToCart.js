const Cart = require('../models/cartModel')
const UpdateCart = async (req, res) => {
        try {
                const updatedCart = await Cart.findOneAndUpdate({ product_id: req.body.productId }, { quantity: req.body.quantity }, { new: true })
                // console.log(updatedCart);
                res.json(updatedCart)
        } catch (error) {
                res.status(400).send({ msg: error.message });
        }
}

module.exports = UpdateCart