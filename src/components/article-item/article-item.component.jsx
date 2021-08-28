import React from 'react';

const ArticleItem = ({ article }) => {
    const { title, date, extract } = article;
    return(
        <div className="article-item">
            <div className="article-item__container">
                <div className="article-item__image">
                </div>
                <div className="article-item__description">
                    <h2>{title}</h2>
                    <span>{date}</span>
                    <p>{extract}</p>
                </div>
            </div>
            
        </div>
    )
    
};

export default ArticleItem;