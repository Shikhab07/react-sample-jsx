import React from 'react';
import createReactClass from "create-react-class";
import { Switch, Route } from 'react-router-dom';
import SidebarComponent from './sidebar.component';
import RightComponent from './right.component';
import './main.component.scss';

import { SharedCategoryContext } from './category-context';
var MainComponent = createReactClass({
    getInitialState: function () {
        return { message: 'This message is passed from category main component' };
    },
    render: function () {
        return (
            <SharedCategoryContext.Provider value={{ message: this.state.message }} >
                <div className="container nested">
                    <SidebarComponent></SidebarComponent>
                    <Switch>
                        <Route exact path='/nestedRoute/:id' component={RightComponent} />
                    </Switch>
                </div>
            </SharedCategoryContext.Provider >
        );
    }
});

export default MainComponent;