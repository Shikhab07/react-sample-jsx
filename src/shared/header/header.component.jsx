import React from 'react';
import createReactClass from "create-react-class";
import { Link, NavLink, Route } from 'react-router-dom';

import SubMenuComponent from './submenu/submenu.component';
import './header.component.scss';


var HeaderComponent = createReactClass({
    render: function () {
        return (
            <section className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/children" activeClassName="selected">Props.children</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/forms' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Forms</NavLink>
                                </li>
                                <li>
                                    <Link className='nav-link' to='/inlinerender'>Route Inline Render</Link>
                                    {/* inclusive routing: when on forms , then only sub menu will display 
                                    for example when the user visits /inlinerender path both / and /inlinerender paths will be matched and their corresponding components  */}
                                    <Route path="/inlinerender" component={SubMenuComponent} />
                                </li>
                                <li>
                                    <Link to='/nestedRoute' className='nav-link'>Nested</Link>
                                </li>
                                <li>
                                    <Link to='/table' className='nav-link'>Table Listing</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        )
    }
});

export default HeaderComponent;