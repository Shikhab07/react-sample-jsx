import React from 'react';
import createReactClass from "create-react-class";
import { Switch, Route } from 'react-router-dom';
import SidebarComponent from './sidebar.component';
import RightComponent from './right.component';
import './main.component.scss';

var MainComponent = createReactClass({
    render: function () {
        return (
            <div className="container nested">
                <SidebarComponent></SidebarComponent>
                <Switch>
                    <Route exact path='/nestedRoute/:id' component={RightComponent} />
                </Switch>
            </div>
        );
    }
});

export default MainComponent;