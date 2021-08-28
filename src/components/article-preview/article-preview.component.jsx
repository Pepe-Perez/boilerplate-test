import React from 'react';

import ArticleItem from '../article-item/article-item.component';
import ARTICLE_DATA from './article.data';

class ArticlePreview extends React.Component{

    constructor(){
        super();

        this.state = {
            articles : ARTICLE_DATA
        }
    }

    render(){
        const { articles } = this.state;
        return(
            <div className="home-articles">
                {
                    articles
                    .map((article, idx) =>(
                        idx < 3
                        ? (<ArticleItem key={article.id} article={article} />)
                        : null
                    ))
                }
            </div>
        )
    } 
};

export default ArticlePreview;
