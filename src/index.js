// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import ScrollToTop from './Components/Actions/ScrollToTop';

// Routes
import Routes from './Routes';

// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/scss/main.scss';

const history = createBrowserHistory()

render(<Router history={history}><ScrollToTop><Routes /></ScrollToTop></Router>, document.getElementById('root'));
registerServiceWorker();
