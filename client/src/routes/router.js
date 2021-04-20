import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import UserRouter from './user';

function MainRouter(){

    return(
        <Router>
            <Route exact path = '/user' component = {UserRouter} />
        </Router>
    )
}

export default MainRouter