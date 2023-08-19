const Order = require('../models/orderModel')
const Allorders = async (req, res) => {
    try {
        const cart_datas = await Order.find({ user: req.user._id }).populate('user', 'name').sort({ 'dateOrdered': -1 })
        // console.log(cart_datas)
        res.json(cart_datas)
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
}
module.exports = Allorders