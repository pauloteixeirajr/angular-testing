import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    // Checks if the whole string returned by greet() contains the passed value
    expect(greet('paulo')).toContain('paulo');
  });
});
