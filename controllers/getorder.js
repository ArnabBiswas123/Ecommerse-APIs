const Order = require('../models/orderModel')
const { ObjectId } = require('mongodb');
const getOrder = async (req, res) => {
    try {
        const id = new ObjectId(req.params.orderId);
        fetched_data = await Order.find({ _id: id })
        // console.log(fetched_data)
        if (!fetched_data) {
            return res.json({ success: false, msg: 'No such order' })
        }
        res.json(fetched_data)
    }
    catch (error) {
        res.status(400).send({ msg: error.message });
    }
}

module.exports = getOrder