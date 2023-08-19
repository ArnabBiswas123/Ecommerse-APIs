const express = require('express');
const router = express.Router()
const Allcategories = require('../controllers/getallCategories')
const Product = require('../controllers/getProduct')
const ListProduct = require('../controllers/getallCategoryProduct')

router.get('/categories', Allcategories)

router.get('/:prodId', Product)
router.get('/allproduct/:categoryId', ListProduct)

module.exports = router;