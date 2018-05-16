import React from 'react';
import LayoutComponent from './shared/layout/layout.component';
import { BrowserRouter } from 'react-router-dom';
import createReactClass from "create-react-class";

var App = createReactClass({
  render: function () {
    return (
      <BrowserRouter>
        <LayoutComponent></LayoutComponent>
      </BrowserRouter>
    );
  }
});

export default App;