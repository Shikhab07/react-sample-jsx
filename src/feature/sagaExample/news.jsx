import React from 'react';
import { connect } from 'react-redux';


const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}

const NewsComponent = ({ article }) => {
    return article !== undefined ?
        <article style={articleStyle}>
            <div>
                <h1>{article.email}</h1>
                <img src={article.picture.thumbnail} alt="" />
                <h4>{article.name.first}</h4>

            </div>
        </article> : <p>No data</p>
};


const mapStateToProps = (state) => {
    return { article: state.todos.news && state.todos.news.length > 0 ? state.todos.news[0] : undefined };
}
const NewsItem = connect(mapStateToProps, null)(NewsComponent);
export default NewsItem;