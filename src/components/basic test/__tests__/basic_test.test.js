import React from 'react';
import Basic from '../basic_test';

import Enzyme, { shallow, mount } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// Basic Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Basic />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});


// Basic Test with Enzyme
it('renders correctly shallow enzyme', () => {
  const wrapper = shallow(<Basic />)

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders correctly mount enzyme', () => {
  const wrapper = mount(<Basic />)

  expect(toJson(wrapper)).toMatchSnapshot();
});
