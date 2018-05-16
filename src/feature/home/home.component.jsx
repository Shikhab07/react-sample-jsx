import React from 'react';
import TabsComponent from './tabs/tabs.component';

import createReactClass from "create-react-class";


var HomeComponent = createReactClass({

    //  state is internal and controlled by the component itself
    // props are external and controlled by the parent component    

    // React calls render everytime a component's state changes, as well as the render of all its children components
    getInitialState: function () {
        return {
            clicks: 0,
            selectedTab: 1,
            numOfTabs:5
        };
    },

    
    // React PureComponent: implements shouldComponentUpdate() it with a shallow prop and state comparison.
    // shouldComponentUpdate: function (nextProps, nextState) {
    //     console.log('shouldComponentUpdate');
    //     return nextState.clicks !== this.state.clicks;
    // },

    // uncommenting above block will not change the classname on tab click

    onButtonClick: function () {
        this.setState({
            clicks: this.state.clicks + 1
        })
    },

    handleTabChange: function (ev) {
        this.setState({
            selectedTab: ev
        });
    },

    render: function () {
        var tabs = [];
        for (var i = 1; i <= this.state.numOfTabs; i++) {
            var isSelected = this.state.selectedTab === i;
            tabs.push(
                <TabsComponent tIndex={{ i }} key={'mykey' + i} selected={isSelected} onTabChanged={this.handleTabChange}></TabsComponent >
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4 className="mt-5">This is a home page</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p><b>State example</b></p>
                    </div>
                    <div className="col-lg-12">Clicks: {this.state.clicks}</div>
                    <button onClick={this.onButtonClick}>Set state on click</button>
                </div>


                {/* bind array of tabs */}
                <div className="row">
                    <div className="col-md-12">
                        <p><b>Props and State / Passing data between components</b></p>
                    </div>
                    <div className="col-md-12">
                        <p>Selected Tab value in parent: {this.state.selectedTab}</p>
                        {tabs}
                    </div>
                </div>  
            </div>
        );
    }
})

export default HomeComponent;