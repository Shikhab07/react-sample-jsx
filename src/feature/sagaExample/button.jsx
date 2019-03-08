import React from 'react';
import { connect } from 'react-redux'
import { getNews } from '../../actions';

import { toastr } from 'react-redux-toastr';

const ButtonComponent = ({ getNews }) => {

    return (
        <div>
            <button onClick={getNews}>Get News</button>

            <button onClick={()=>toastr.success('The title', 'The message')}>Click to view toastr</button>
        </div>
    )
};

const mapDispatchToProps = {
    getNews: getNews
};

const GetButton = connect(null, mapDispatchToProps)(ButtonComponent);
export default GetButton;