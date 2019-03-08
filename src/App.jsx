import React from 'react';
import LayoutContainerComponent from './shared/layout/layout.component';
import { BrowserRouter } from 'react-router-dom';
import createReactClass from "create-react-class";
import {unregister} from './config';
var App = createReactClass({
  render: function () {
    return (
      <BrowserRouter>
        <LayoutContainerComponent></LayoutContainerComponent>
      </BrowserRouter>
    );
  }
});

export default App;