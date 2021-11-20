import React from 'react';
import Counter from '../counter';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('the increment method increments count', () => {
  const wrapper = mount(<Counter />)

  // asserting what the state is at initial render
  expect(wrapper.instance().state.count).toBe(0)

  // lets simulate the dom being clicked
  wrapper.find('button.counter-button').simulate('click')

  // setting state directly with api
  wrapper.setState({count: 2})

  // accessing method on the instance
  wrapper.instance().increment()

  expect(wrapper.instance().state.count).toBe(3)
})
