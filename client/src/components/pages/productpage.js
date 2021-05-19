import React, { useEffect } from 'react'
import '../../assets/pages/productpage.css'
import {useDispatch, useSelector} from 'react-redux'
import {ProductDetail} from '../../actions/product'

function ProductPage({match, history}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductDetail(match.params.id))
  }, [])

  const product = useSelector((state) => state.product);
  const AddtoCart = () => {
    history.push(`/cart`);
  }


  if(Object.keys(product).length === 1){
    return(
      <h1>Loading</h1>
    )
  } else if(Object.keys(product).length === 2) {
    return(
      <div className="productscreen">
        <div className="productscreen__left">
          <div className="left__image">
            <img src={product.product.data[0].imageUrl} alt = "ord"/>
          </div>
          <div className="left__info">
            <p className="left__name">{ product.product.data[0].name }</p>
            <p>${ product.product.data[0].price }</p>
            <p> { product.product.data[0].description } </p>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
              <p>
                Price:
                <span>${product.product.data[0].price}</span>
              </p>
              <p>
                Status:
                <span>
                  In Stock
                </span>
              </p>
              <p>
                Qty
                <select >
                    <option key={1} value={1}>
                      {1}
                    </option>
                </select>
              </p>
                <p>
                <button type="button" onClick = {AddtoCart}>
                  Add To Cart
                </button>
                </p>
          </div>
        </div>
      </div>
    )
  }
} 

export default ProductPage