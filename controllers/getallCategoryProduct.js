const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');

const ListProduct = async (req, res) => {
    try {
        const id = new ObjectId(req.params.categoryId);
        const fetched_data = await mongoose.connection.db.collection('foodCategory').find({ _id: id }).toArray();
        // console.log(fetched_data)
        const name = fetched_data[0].CategoryName;
        const cat_data = await mongoose.connection.db.collection('foodData').find({ CategoryName: name }).toArray();
        // console.log(fetched_data)
        res.json(cat_data)
    }
    catch (error) {
        res.status(400).send({ msg: error.message });
    }

}
module.exports = ListProduct