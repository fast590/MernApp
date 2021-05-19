import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CartPage from '../components/pages/cartpage'
import Homepage from '../components/pages/homepage'
import ProductPage from '../components/pages/productpage'
import Navbar from '../components/commons/navbar'
import Backdrop from '../components/commons/backdrop'
import Sidedrawer from '../components/commons/sidedrawer'


function MainRouter() {
    const [sideToggle, setsideToggle] = useState(false)
    return(
        <Router>
            <Navbar onclick={() => setsideToggle(true)} />
            <Backdrop show = {sideToggle} onclick = {() => setsideToggle(false)} />
            <Sidedrawer show = {sideToggle} onclick = {() => setsideToggle(false)} />
            <Switch>
                <Route exact path = "/" component = {Homepage} />
                <Route path = "/product/:id" component = {ProductPage} />
                <Route path = "/cart" component = {CartPage} />
            </Switch>
        </Router>
    )
}

export default MainRouter