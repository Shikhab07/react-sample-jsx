import React from 'react';
import { connect } from 'react-redux'


const LoadingComponent = ({ loading }) => (
    loading ?
        <div style={{ textAlign: 'center' }}>
            <h1>LOADING</h1>
        </div> :
        null
);

const mapStateToProps = (state) =>
    ({
        loading: state.todos.loading
    });

const Loading = connect(mapStateToProps, null)(LoadingComponent);
export default Loading;