import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard'
import List from './containers/List';
import Contract from './containers/contract';
import Home from './containers/Home';
import Login from './containers/authentication/login'

const routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={List} />
            <Route exact path="/contract" component={Contract} />
            <Route exact path="/login" component={Login} />
            <Route path='/dashboard' component={Dashboard} />
        </div>

    );
}

export default routes;
