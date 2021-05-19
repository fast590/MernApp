import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/commons/product.css'

function Product(product) {
  
    return (
        <div className="product">
        <img src= {product.product.imageUrl} alt = "product" />
  
        <div className="product__info">
          <p className="info__name">{product.product.name}</p>
  
          <p className="info__description">
          {product.product.description.substring(0, 100)}...
          </p>
          <p className="info__price">${product.product.price}</p>
  
          <Link to={`/product/${product.product.id}`} className="info__button">
            View
          </Link>
        </div>
      </div>
    )
}

export default Product
