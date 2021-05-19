require('dotenv').config({path: __dirname + '/../../.env'});
const mongose = require('mongoose')

const mongoUri = process.env.MONGO_URI

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}
const mongoDB = () => {
    mongose
        .connect(mongoUri, options)
        .then(() => console.log('MongoDB connected'))
        .catch(error => console.log(error))
}
module.exports = mongoDB

