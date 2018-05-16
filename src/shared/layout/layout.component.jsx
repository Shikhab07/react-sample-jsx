import React from 'react';
import createReactClass from "create-react-class";
import { Route, Switch } from 'react-router-dom';
import NotFoundComponent from '../../feature/notfound/notfound.component';
import HeaderComponent from '../header/header.component';
import HomeComponent from '../../feature/home/home.component';
import MainListComponent from '../../feature/props.children/mainList.component';
import FormComponent from '../../feature/forms/form.component';
import MainComponent from '../../feature/nested/main.component';

var LayoutComponent = createReactClass({
    render: function () {
        return (
            <div className="container">

                <HeaderComponent>
                </HeaderComponent>
                {/* routing defination */}
                <section className="content">
                    {/* exclusive routing :the first match is rendered */}
                    <Switch>
                        <Route path="/" exact component={HomeComponent} />
                        <Route path="/forms" exact component={FormComponent} />
                        <Route path="/children" exact component={MainListComponent} />
                        <Route path="/inlinerender" render={function () {
                            return (
                                <div className="container add-top-gutter">
                                    Inline renderimg of route
                                            </div>
                            )
                        }} />
                        <Route path="/nestedRoute" component={MainComponent} />
                        <Route path="*" component={NotFoundComponent} />
                    </Switch>
                </section>
            </div>

        );
    }
})

export default LayoutComponent;