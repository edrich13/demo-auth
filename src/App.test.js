import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  enzyme.shallow(<App />);
});

// it('renders welcome message', () => {
//   const wrapper = enzyme.shallow(<App />);
//   const welcome = <h2>Welcome to React</h2>;
//   expect(wrapper.contains(welcome)).toEqual(true);
// });