const Cart = require('../models/cartModel')
const DeletetoCart = async (req, res) => {
    try {
        const newCart = await Cart.findOneAndDelete({ _id:req.body.cartId }, { new: true })
        // console.log(newCart)
        if(newCart===null){
            return res.json({success:false,msg:'The Item is not present In the cart'})
        }
        res.json(newCart)
    }
    catch (error) {
        res.status(400).send({ msg: error.message });
    }
}
module.exports = DeletetoCart