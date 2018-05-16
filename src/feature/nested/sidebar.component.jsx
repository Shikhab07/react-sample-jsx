import React from 'react';
import createReactClass from "create-react-class";
import { Link } from 'react-router-dom';
var SidebarComponent = createReactClass({
    render: function () {
        var links = [];
        for (var i = 1; i <= 3; i++) {
            links.push(
                <li key={i}>
                    <Link to={`/nestedRoute/${i}`} >Category {i}</Link>
                </li>
            );
        }
        return (
            <div className="sidenav">
                <ul>
                    {links}
                </ul>
            </div>
        );
    }
})

export default SidebarComponent;