const User = require('../lib/User');

describe('User class', () => {
  let user = null;

  beforeEach(() => {
    user = new User('Leslie', 'leslie@test.com', '123abc');
  });

  it('has name property', () => {
    expect(user.name).toBe('Leslie');
  });

  it('has email property', () => {
    expect(user.email).toBe('leslie@test.com');
  });

  it('has password property', () => {
    expect(user.password).toBe('123abc');
  });
});
