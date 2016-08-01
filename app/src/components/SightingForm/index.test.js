import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import SightingForm from './index';

describe('SightingForm component', () => {
  it('has 1 Text element', () => {
    const wrapper = shallow(
      <SightingForm />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
