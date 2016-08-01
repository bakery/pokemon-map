import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import { AddSighting } from './index';

describe('AddSighting component', () => {
  it('has 1 Text element', () => {
    const dispatchSpy = spy();
    const containerData = {};
    const wrapper = shallow(
      <AddSighting dispatch={dispatchSpy} addSighting={containerData} />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
