import React from 'react';
import createReactClass from "create-react-class";


// Demonstrates how innerhtml of a component can be manipulated
var ListComponent = createReactClass({

    
    render: function () {
        var children = this.props.children.map((row, index) => {
            if (index % 2) {
                return React.cloneElement(<li key={index}> {row} </li>, { style: { background: this.props.firstColor } });
            } else {
                return React.cloneElement(<li key={index}>{row} </li>, { style: { background: this.props.secondColor } });
            }
        });

        return (
            <ul>
                {children}
            </ul>
        );
    }
})




export default ListComponent;