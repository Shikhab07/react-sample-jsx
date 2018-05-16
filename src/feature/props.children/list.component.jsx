import React from 'react';
import createReactClass from "create-react-class";


// Demonstrates how innerhtml of a component can be manipulated
var ListComponent = createReactClass({

    render: function () {
        var children = React.Children.map(this.props.children, function (child) {
             return <li>{child}</li>;
        });

        return (
            <ul>
                {children}
            </ul>
        );
    }
})




export default ListComponent;