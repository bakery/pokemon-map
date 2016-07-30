import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import App from './index';

describe('App component', () => {
  it('has 1 Text element', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
