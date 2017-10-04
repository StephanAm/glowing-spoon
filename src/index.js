import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('root')
);
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Router,browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/