import React from 'react';
import { Route } from 'react-router-dom';
import ContractList from './Dashboard/views/ContractList/ContractList';
import Home from './Dashboard/views/home'

export const DashboardRoutes = () => {
    return (
        <div>
            <Route path='/dashboard/contracts' component={ContractList} />
            <Route path='/dashboard/home' component={Home} />
        </div>
    );
}

