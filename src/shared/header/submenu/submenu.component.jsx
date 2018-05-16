import React from 'react';
import '../header.component.scss';
import createReactClass from "create-react-class";

var SubMenuComponent = createReactClass({
    render: function () {
        return (
            <ul className="nav nav-pills">
                <li className="active"><a> Sub 1 </a></li>
                <li><a> Sub 2</a></li>
                <li><a> Sub 3 </a></li>
            </ul>
        );
    }
})

export default SubMenuComponent;