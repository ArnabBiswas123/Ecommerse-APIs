const mongoose = require('mongoose')

const Allcategories = async (req, res) => {
    try {
        const fetched_data = await mongoose.connection.db.collection('foodCategory').find().toArray();
        // console.log(fetched_data)
        res.json(fetched_data);
    }
    catch (error) {
        res.status(400).send({ msg: error.message });
    }
}

module.exports = Allcategories;