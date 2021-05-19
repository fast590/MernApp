import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/commons/sidedrawer.css'


const Sidedrawer = ({show, onclick}) => {
    const SideDrawerClass = ['sidedrawer']
    if(show){
        SideDrawerClass.push('show')
    }
    return (
        <div className= {SideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links"  onClick = {onclick} >
                <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                    Cart{" "}
                    <span className="sidedrawer__cartbadge"></span>
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidedrawer
