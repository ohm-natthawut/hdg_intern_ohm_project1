const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product.js');


// GET all products
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        next(err);
    }
});


// POST a new product
router.post('/', async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (err) {
        next(err);
    }
});


// DELETE a product by ID
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully", deletedProduct });
    } catch (err) {
        next(err);
    }
});

// PUT (update) a product by ID
router.put('/:id', async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product updated successfully", updatedProduct });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
