import {combineReducers} from 'redux';
import {products, product} from './productreducer'

const store = combineReducers({
    products, product
})

export default store;