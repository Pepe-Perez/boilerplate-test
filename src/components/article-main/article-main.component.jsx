import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

const ArticleMain = () => (
    <div className="main-article">
        <div className="main-article__item main-article__image">
            <div className="main-image__container">
                <div className="main-image__inner"></div>
            </div>
        </div>
        <div className="main-article__item  main-article__description">
            <h2>Get the New Razda template</h2>
            <h3>The best new way to showcase your work</h3>
            <p><span>Nam liber tempor soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerant facer possim assum Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demostraverunt lectores</span> legere me lius quod ii legun saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectoru</p>
            <CustomButton>DOWNLOAD NOW</CustomButton>
        </div>
    </div>
);

export default ArticleMain;