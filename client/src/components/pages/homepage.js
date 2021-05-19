import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../commons/product'
import {getProducts} from '../../actions/product'
import '../../assets/pages/homepage.css'

function Homepage() {

    const dispatch = useDispatch()

    const allProducts = useSelector((state) => state.products);
    const { allproducts } = allProducts;
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (allproducts.length !== 0){
        return (
            <div className="homescreen">
                <h1 className="homescreen__title">Products</h1>
                <div className="homescreen__products">
                    { allproducts.data.map((product) => 
                        <Product product = {product} key = {product.id} />) }
                </div>
            </div>
        )
    } else {
        return (
            <div>
                Loadding    
            </div>
        )
    }
}

export default Homepage