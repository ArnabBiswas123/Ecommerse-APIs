const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');

const Product = async (req, res) => {
    try {
        const id = new ObjectId(req.params.prodId);
        const fetched_data = await mongoose.connection.db.collection('foodData').find({ _id: id }).toArray();
        // console.log(fetched_data)
        res.json(fetched_data)
    }
    catch (error) {
        res.status(400).send({ msg: error.message });
    }

}
module.exports = Product