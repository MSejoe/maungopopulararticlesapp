import React from 'react';
import ReactDOM from 'react-dom';
import ArticleCard from './ArticleCard';
 
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArticleCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});