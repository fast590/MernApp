import React from 'react'
import '../../assets/pages/cartpage.css'
import {Link} from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import CartItem from '../commons/cartitem'

function CartPage() {
  // const dispatch = useDispatch()
  return(
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
              <CartItem />
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal 3 items</p>
            <p>$333</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    )
}

export default CartPage