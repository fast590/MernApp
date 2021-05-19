import * as actionType from './types'
import axios from 'axios'

export const getProducts =  () => (dispatch)=> {
    const request = axios.get('http://localhost:4000/proudct/all', {withCredentials: true, credentials: 'include'})

    dispatch({
        type: actionType.GET_PRODUCTS_SUCCESS,
        payload: request
    });
}
export const ProductDetail =  (id) => (dispatch) => {
    const request = axios.get(`http://localhost:4000/proudct/:${id}`,  {withCredentials: true, credentials: 'include'})
    dispatch({
        type: actionType.GET_PRODUCT_DETAIL,
        payload: request
    });
}
