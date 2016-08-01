import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import PokemonList from './index';

describe('PokemonList component', () => {
  it('has 1 Text element', () => {
    const wrapper = shallow(
      <PokemonList />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
