import React from 'react';
import ReactDOM from 'react-dom';
import Articles from './Articles';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

const handleKeypadClick = jest.fn(({ target }) => target.value);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Articles />, div);
    ReactDOM.unmountComponentAtNode(div);
});