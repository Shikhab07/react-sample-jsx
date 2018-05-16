import React from 'react';
import './tabs.component.scss';
import createReactClass from "create-react-class";

var TabsComponent = createReactClass({

    handleTabClick: function () {
       // change state variable of parent component
       this.props.onTabChanged(this.props.tIndex.i);            
    },
    render: function () {
        return (
            <button className={`primary addGutter ${this.props.selected ? 'selected' : ''}`}
                onClick={this.handleTabClick}>
                TAB{this.props.tIndex.i}
            </button>
        );
    }
});

export default TabsComponent;