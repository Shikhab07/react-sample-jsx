import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
// Render an instance of AppComponent into root
ReactDOM.render((
     <App />
    ), document.getElementById('root'))
registerServiceWorker();