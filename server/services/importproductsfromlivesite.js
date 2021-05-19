const express = require('express')
const app = express()
const request = require('request');
const mongoDB = require('./mongodb')
const Product = require('../models/product')

const getProducts = () => {
    var options = {
        'method': 'GET',
        'url': 'https://elkcreekfirepits.com/wp-json/wc/v3/products',
        'headers': {
            'Authorization': 'Basic Y2tfMmY2Y2M1OTdmNDczOTEzNmJhY2NlNGMwOTUzYzFkMmQwNWIzM2Q4OTpjc18wNjc4YWE4NDQ3YTU5ZmM2OGM0ZDNkNWRlYTZiYjc4NjNjZjIyNzAx'
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        let product = JSON.parse(response.body)
        console.log(product)
    });
}

module.exports = getProducts