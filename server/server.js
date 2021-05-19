require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoDB = require('./services/mongodb')
const importProducts = require('./services/importproductsfromstatic')
const products = require('./routes/product')


app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

mongoDB();
app.use('/proudct', products)
// importProducts();
app.listen(PORT, () => console.log(`server is running on port ${PORT}!`))


