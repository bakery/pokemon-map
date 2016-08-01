import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import Pokemon from './index';

describe('Pokemon component', () => {
  it('has 1 Text element', () => {
    const wrapper = shallow(
      <Pokemon />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
