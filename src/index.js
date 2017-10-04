import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import {loadSuppliers} from './actions/supplierActions';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadSuppliers());
ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
