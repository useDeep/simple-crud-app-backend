const Product = require('../models/product.model')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const editProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            return res.status(404).json({ msg: "Product not found" })
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ msg: "Product not found" })
        }
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = {
    getProducts,
    addProduct,
    getProduct,
    editProduct,
    deleteProduct
}