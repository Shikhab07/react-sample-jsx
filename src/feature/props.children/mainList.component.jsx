import React from 'react';
import ListComponent from './list.component';
import createReactClass from "create-react-class";


var MainListComponent = createReactClass({

    getInitialState: function () {
        return {
            records: [],
            dateValue: new Date()
        };
    },

    componentWillMount: function () {
        fetch('https://randomuser.me/api/?results=5').then(results => {
            return results.json();
        }).then(data => {
            let res = data.results.map((r) => {
                return (
                    <p key={r.id.value}>Name : {r.name.title}. {r.name.first} {r.name.last} </p>
                )
            });
            this.setState({ records: res });
        });
    },

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
                        <ListComponent firstColor="#ccc" secondColor="#eee">
                            <h4>Element one</h4>
                            {middleData}
                            <h4>Element last</h4>
                            
                            <p>
                                {new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'GBP',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(12000)}
                            </p>
                            <p>
                                {this.state.dateValue.toString()}
                            </p>
                            <p>
                                {new Intl.DateTimeFormat('en-GB', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(this.state.dateValue)}
                            </p>
                        </ListComponent>
                        <p>API Records</p>
                        <ListComponent firstColor="#ccc" secondColor="#eee">
                            {this.state.records}
                        </ListComponent>
                    </div>
                </div>
            </div>
        );
    }
})




export default MainListComponent;