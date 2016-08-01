import reducer from './reducer';

describe('AddSighting reducer', () => {
  it('returns default state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql({});
  });
});
