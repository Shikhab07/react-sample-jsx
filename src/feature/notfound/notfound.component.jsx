import React from 'react';
import createReactClass from "create-react-class";

var NotFoundComponent = createReactClass({
    render: function () {
        return (
            <section className="content">
                <div className="container">
                    <div className="row">
                        <h3>Page not found</h3>
                    </div>
                </div>
            </section>
        );
    }
})

export default NotFoundComponent;