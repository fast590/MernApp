const express = require('express')
const mongoDB = require('./mongodb')
const Product = require('../models/product')
const productData = require('../data/products')

const importProducts = () => {
    Product
        .insertMany(productData)
        .then(() => console.log("Products inserted successfully"))
        .catch(error => console.log(error))
}

module.exports = importProducts