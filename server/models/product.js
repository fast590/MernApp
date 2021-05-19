const mongose = require('mongoose')

const productSchema = new mongose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:false
    },
    sku: {
        type: String,
        require: false,
        unique: true
    },
    price: {
        type:Number,
        require:true
    },
    countInstock: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    }
})

const Product = mongose.model("product", productSchema)

module.exports = Product
