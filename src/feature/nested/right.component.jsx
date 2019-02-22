import React from 'react';
import createReactClass from "create-react-class";
import { SharedCategoryContext } from './category-context';

var RightComponent = createReactClass({
    render: function () {
        console.log(this.props.match.params.id);
        return (
            <SharedCategoryContext.Consumer>
                {(context) => (
                    <div className="main">
                        category Id recieved : {this.props.match.params.id}
                        message from category: {context.message}
                    </div>
                )}

            </SharedCategoryContext.Consumer>

        );
    }
});

export default RightComponent;