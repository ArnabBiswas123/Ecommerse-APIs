const express = require('express');
const router = express.Router()
const {protect}=require('../middleware/authToken');
const Addtoorder=require('../controllers/addToOrder')
const Allorders=require('../controllers/Allorders')
const getOrder=require('../controllers/getorder')

router.post('/addtoorder',protect,Addtoorder)

router.get('/allorder',protect,Allorders)

router.get('/:orderId',protect,getOrder)


module.exports = router;