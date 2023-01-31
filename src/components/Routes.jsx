import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Publications from '../pages/Publication/publication'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path ='/publications' component={Publications}/>
        </Switch>
    )
}

export default Routes
