import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import Loader from './index';

describe('Loader component', () => {
  it('has 1 Text element', () => {
    const wrapper = shallow(
      <Loader />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
