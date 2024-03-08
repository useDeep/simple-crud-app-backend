const express = require('express')
const router = express.Router()
const { getProducts, getProduct, addProduct, deleteProduct, editProduct } = require('../controllers/product.controller')

router.post('/', addProduct)

router.get('/', getProducts)

router.get('/:id', getProduct)

router.put('/:id', editProduct)

router.delete('/:id', deleteProduct)

module.exports = router