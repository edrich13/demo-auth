import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import enzyme from 'enzyme';

it('renders without crashing Header test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing Header test', () => {
  enzyme.shallow(<Header />);
});