import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import AddSightingButton from './index';

describe('AddSightingButton component', () => {
  it('has 1 Text element', () => {
    const wrapper = shallow(
      <AddSightingButton />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
