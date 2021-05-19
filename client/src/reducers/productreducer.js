import * as dataType from '../actions/types'

export const products = (state = { allproducts: [] }, action) => {
    switch(action.type) {
        
        case dataType.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                allproducts: action.payload,
              };
        case dataType.GET_PRODUCTS_FAIL:
            return {
                loading: true,
                error: action.payload,
              };
        default:
            return state;
    }
}
export const product = (state = { product: {} }, action) => {
    switch(action.type) {
        case dataType.GET_PRODUCT_DETAIL:
            return {
                loading:true,
                product: action.payload,
              };
        default:
            return state;
    }
}


