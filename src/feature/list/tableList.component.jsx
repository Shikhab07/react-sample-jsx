import React from 'react';
import createReactClass from 'create-react-class';
import './tableList.component.scss';
import ApiClientService from '../../services/apiService';
var TableComponent = createReactClass({
    getInitialState: function () {
        return {
            apiRecords: [],
            sort: {}
        };
    },
    componentWillMount: function () {
        ApiClientService.getData().then(this.onLoad);
    },

    handleHeaderClick: function (dataIndex) {
        const sort = this.state.sort;
        const direction = (sort && sort.dataIndex === dataIndex) ? (sort.direction === 'ASC' ? 'DESC' : 'ASC') : 'ASC';
        this.setState({
            sort: {
                dataIndex, direction
            }
        });
    },

    onLoad: function (data) {
        this.setState({
            apiRecords: data.results
        });

    },

    render: function () {
        const sort = this.state.sort;
        return this.renderData(this.state.apiRecords, sort);
    },

    renderData(data, sort) {
        if (data && data.length > 0) {
            let res = this.sortData(data, sort).map(r => {
                return (
                    <tr key={r.email}>
                        <td>{r.name.title}. {r.name.first} {r.name.last}</td>
                        <td>{r.email}</td>
                        <td>{r.location.city}</td>
                    </tr>
                );
            });

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h4 className="mt-5">This is a table component</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="table table-striped">
                            <table>
                                <thead>
                                    <tr>
                                        <th onClick={this.handleHeaderClick.bind(this, 'name.first')}>Name
                                        {this.getSort('name.first', sort)}
                                        </th>
                                        <th onClick={this.handleHeaderClick.bind(this, 'email')}>Email
                                        {this.getSort('email', sort)}
                                        </th>
                                        <th onClick={this.handleHeaderClick.bind(this, 'location.city')}>City
                                        {this.getSort('location.city', sort)}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {res}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>No records found</div>
            )
        }
    },

    getSort(dataIndex, sort) {
        return sort && sort.dataIndex === dataIndex ? `(${sort.direction})` : null;
    },

    sortData(data, sort) {
        if (sort) {
            let mainprop = undefined;
            let childProp = undefined;
            const { dataIndex, direction } = sort;
            if (dataIndex !== undefined) {
                if (dataIndex.indexOf('.') > -1) {
                    mainprop = dataIndex.split('.')[0];
                    childProp = dataIndex.split('.')[1];
                } else {
                    mainprop = dataIndex;
                }
            }
            const dir = direction === 'ASC' ? 1 : -1;
            return data.slice().sort((A, B) => {
                const a = (childProp === undefined) ? A[mainprop] : A[mainprop][childProp];
                const b = (childProp === undefined) ? B[mainprop] : B[mainprop][childProp];
                if (a > b) {
                    return 1 * dir;
                }
                if (a < b) {
                    return -1 * dir;
                }
                return 0;
            });
        }
        return data;
    }

});

export default TableComponent;