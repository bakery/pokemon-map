import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import { Map } from './index';

describe('Map component', () => {
  it('has 1 Text element', () => {
    const dispatchSpy = spy();
    const containerData = {};
    const wrapper = shallow(
      <Map dispatch={dispatchSpy} map={containerData} />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
