const express = require('express');
const router = express.Router()
const {protect}=require('../middleware/authToken');
const Addtocart=require('../controllers/addToCart')
const AllCarts=require('../controllers/AllCarts')
const DeletetoCart=require('../controllers/deletetocart')
const UpdateCart=require('../controllers/updateToCart')

router.post('/addtocart',protect,Addtocart);

router.get('/allcarts',protect,AllCarts)

router.put('/updatecart',protect,UpdateCart)

router.delete('/deletecart',protect,DeletetoCart)













module.exports = router;