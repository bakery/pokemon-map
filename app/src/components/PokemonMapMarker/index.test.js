import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import PokemonMapMarker from './index';

describe('PokemonMapMarker component', () => {
  it('has 1 Text element', () => {
    const wrapper = shallow(
      <PokemonMapMarker />
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
  });
});
