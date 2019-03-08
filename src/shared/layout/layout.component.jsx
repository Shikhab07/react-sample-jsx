import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundComponent from '../../feature/notfound/notfound.component';
import HeaderComponent from '../header/header.component';
import HomeComponent from '../../feature/home/home.component';
import MainListComponent from '../../feature/props.children/mainList.component';
import FormComponent from '../../feature/forms/form.component';
import MainComponent from '../../feature/nested/main.component';
import TableComponent from '../../feature/list/tableList.component';
import ToDoListDemoComponent from '../../feature/ToDo/ToDoListDemo';
import NewsDisplayComponent from '../../feature/sagaExample/sample'
import { connect } from 'react-redux';


const loaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%'
}

const LayoutComponent = ({ loading }) => {
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
                                Inline rendering of route
                                            </div>
                        )
                    }} />
                    <Route path="/nestedRoute" component={MainComponent} />
                    <Route path="/redux-demo/:filter?" component={ToDoListDemoComponent} />
                    <Route path="/table" component={TableComponent} />
                    <Route path="/saga" component={NewsDisplayComponent} />
                    <Route path="*" component={NotFoundComponent} />
                </Switch>
            </section>
            {loading !== undefined && loading === true ? <div style={loaderStyle}><h1>I am the loader</h1></div> : ''}

        </div>

    );
}
const mapStateToProps = (state) => {
    console.log(state.todos.loading);
    return {
        loading: state.todos.loading === undefined ? false : state.todos.loading
    }
};

const LayoutContainerComponent = connect(mapStateToProps, null)(LayoutComponent);
export default LayoutContainerComponent;