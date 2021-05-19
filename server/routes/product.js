const express = require('express')
const router = express.Router();
const {
    getAllProducts,
    getProductById
} = require('../middleware/productMiddleware')

router.get('/all',getAllProducts)

router.get("/:id", getProductById)

module.exports = router
