const express = require('express')
const Product = require('../models/product')

const getAllProducts = (req, res) => {
    Product
        .find({}, (err, products) => {
            if(err) console.log(err)
            if(products) res.json(products);
            else res.json({products: 'dont exist'})
        })
}
const getProductById = (req, res) => {
    var id = req.params.id.replace(":", "")
    Product
        .find({id: id}, (err, product) => {
            if(err) console.log(err)
            if(product) res.json(product);
            else res.json({product: 'dont exist'})
        })
}

module.exports = {
    getAllProducts,
    getProductById
}