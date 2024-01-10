const express = require('express');
const Product = require('../models/productModel');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')
const router = express.Router()

router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)
router.route('/')
    .get(getProducts)
    .post(createProduct)


module.exports = router