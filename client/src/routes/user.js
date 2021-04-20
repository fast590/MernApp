import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from '../components/user';
import UserSignup from '../components/signup'

function UserRouter() {
    return(
        <Router>
            <Route path = '/' component = {User}/>
            <Route path = '/signup' component = {UserSignup} />
        </Router>
    )
}

export default UserRouter