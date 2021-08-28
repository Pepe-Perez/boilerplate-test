import React from 'react';

import HeroBanner from '../../components/hero-banner/hero-banner.component';
import ArticlePreview from '../../components/article-preview/article-preview.component';
import ArticleMain from '../../components/article-main/article-main.component';

const HomePage = () => (
    <div>
        <HeroBanner />
        <ArticlePreview />
        <ArticleMain />
    </div>
);

export default HomePage;