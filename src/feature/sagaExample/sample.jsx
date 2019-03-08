import React from 'react';
import NewsItem from './news';
import GetButton from './button';
import { connect } from 'react-redux';

const SampleNewsComponent = () => (
    <div>
        <GetButton></GetButton>
        <NewsItem></NewsItem>
    </div>
);

// creating container
const NewsDisplayComponent = connect(null, null)(SampleNewsComponent);
export default NewsDisplayComponent;
