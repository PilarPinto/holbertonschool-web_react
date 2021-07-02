import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import App from './App';

it('renders properly', () => {
  shallow(<App />);
});

it('checking renders', () => {
  const wrapper = shallow(<App />);

  const header = wrapper.find('div.App-body');
  const body = wrapper.find('div.App-body');
  const footer = wrapper.find('div.App-footer')

  assert.equal(header.exists(), true)
  assert.equal(body.exists(), true);
  assert.equal(footer.exists(), true);
});
