const Cart = require('../models/cartModel')
const AllCarts = async (req, res) => {
    try {
        const cart_datas = await Cart.find({ user: req.user._id }).populate('user', 'name')
      
        res.json(cart_datas)
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
}
module.exports = AllCarts