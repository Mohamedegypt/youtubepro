import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var app = mount(<App />);
  const p = app.find('.App-title')
  expect(p.text()).toBe('Welcome to React');

  ReactDOM.render(app, div);
  ReactDOM.unmountComponentAtNode(div);
});
