import React from 'react';
import {Route} from 'react-router-dom';
import Dashboard from './containers/Dashboard'
const Routes = () => {
    return(
        <Route path='/dashboard' component={Dashboard} />
    );
}

export default Routes;