import React from 'react';
import PropTypes from 'prop-types';

const LinkComponent = ({active, children, onClick})=>{
    if(active){
        return <span>{children}</span>
    }

    return (
       <a href="" onClick={(e)=> {e.preventDefault(); onClick();}}>{children}</a>
    );
};

LinkComponent.propTypes= {

 active: PropTypes.bool.isRequired,
 children: PropTypes.node.isRequired,
 onClick: PropTypes.func.isRequired
};

export default LinkComponent;