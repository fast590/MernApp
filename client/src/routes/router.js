import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import User from '../components/user';
import UserSignup from '../components/signup'
import TicTac from '../components/page/tictac'

function MainRouter(){

    return(
        <Router>
            <Switch>
                <Route exact path = '/user' component = {User}/>
                <Route path = '/user/signup' component = {UserSignup} />
                <Route path = '/game/tictac' component = {TicTac} />
            </Switch>
        </Router>
    )
}

export default MainRouter