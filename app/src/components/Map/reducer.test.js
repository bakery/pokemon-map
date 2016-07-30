import reducer from './reducer';

describe('Map reducer', () => {
  it('returns default state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql({});
  });
});
