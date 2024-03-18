// routers/productRoutes.js

const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers.js');

router.get('/', productsControllers.getAllProducts);
router.post('/', productsControllers.createProduct);
router.delete('/:id', productsControllers.deleteProduct);
router.put('/:id', productsControllers.updateProduct);

module.exports = router;
