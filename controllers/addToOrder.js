const Order = require('../models/orderModel')

const Addtoorder = async (req, res) => {
    try {
        const mapped_data = req.body.products.map(items => {
            return {
                product_id: items.productId,
                quantity: items.quantity
            }
        })
        // console.log(mapped_data)


        const orderData = await Order.create({
            user: req.user._id,
            products: mapped_data,
            price: req.body.price,
            address: req.body.address,
            status: req.body.status
        })

        res.json(orderData);
    }
    catch (error) {
        res.status(400).send({ msg: error.message });
    }
}
module.exports = Addtoorder;