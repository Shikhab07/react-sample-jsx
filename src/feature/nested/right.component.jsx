import React from 'react';
import createReactClass from "create-react-class";


var RightComponent = createReactClass({
    render: function () {
        console.log(this.props.match.params.id);
        return (
            <div className="main">
               category Id recieved : {this.props.match.params.id}
            </div>
        );
    }
});

export default RightComponent;