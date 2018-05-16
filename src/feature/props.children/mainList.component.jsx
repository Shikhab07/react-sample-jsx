import React from 'react';
import ListComponent from './list.component';
import createReactClass from "create-react-class";


var MainListComponent = createReactClass({

    render: function () {
        var middleData = [
            <a key='2'>Anchor tag element</a>,
            <div key='3'>Div element</div>
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p><b> React.Children utilities to work with children
                this.props.children </b></p>
                    </div>
                    <div className="col-md-12">
                        <ListComponent>
                            <h4>Element one</h4>
                            {middleData}
                            <h4>Element last</h4>
                        </ListComponent>
                    </div>
                </div>
            </div>
        );
    }
})




export default MainListComponent;