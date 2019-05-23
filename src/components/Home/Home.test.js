import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import enzyme from 'enzyme';

it('renders without crashing home test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing home test', () => {
  enzyme.shallow(<Home />);
});