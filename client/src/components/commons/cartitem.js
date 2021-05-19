import React from 'react'
import '../../assets/commons/cartitem.css'
import {Link} from 'react-router-dom'

function cartitem() {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt = "cart"/>
            </div>
            <Link to={`/product/${1}`} className="cartItem__name">
                <p>Product 1</p>
            </Link>
            <p className="cartitem__price">$222</p>
            <select className="cartItem__select" >
                <option key={1} value={1}>
                    {1}
                </option>
            </select>
            <button className="cartItem__deleteBtn" >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default cartitem
