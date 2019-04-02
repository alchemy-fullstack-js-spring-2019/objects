const { User } = require('../lib/User');

describe('User class', () => {
  let user = null;

  beforeEach(() => {
    user = new User('Leslie');
  });

  it('has a name property', () => {
    expect(user.name).toBe('Leslie');
  });
});
