import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import PokemonSelector from './index';

describe('PokemonSelector component', () => {
  it('has 1 Text element', () => {
    const wrapper = shallow(
      <PokemonSelector />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
