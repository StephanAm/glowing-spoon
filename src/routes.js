import 'babel-polyfill';
import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import SupplierPage from './components/Supplier/SupplierPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="supplier" component={SupplierPage}/>
    </Route>
);