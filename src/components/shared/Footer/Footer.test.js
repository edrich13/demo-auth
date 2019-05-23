import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import enzyme from 'enzyme';

it('renders without crashing Footer test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing Footer test', () => {
  enzyme.shallow(<Footer />);
});