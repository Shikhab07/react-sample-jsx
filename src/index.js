import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import createstore  from './store';
import ReduxToastr from 'react-redux-toastr'

// Render an instance of AppComponent into root
ReactDOM.render((
    <Provider store={createstore}>
     <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar= {false}
      closeOnToastrClick/>
      <App />
    </Provider>
    ), document.getElementById('root'))
registerServiceWorker();