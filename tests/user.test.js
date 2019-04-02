const User = require('../lib/user');
const newUser = new User('Ben', 'name@email.com', '123abc');

describe('user class', () => {
  it('returns the user id', () => {
    expect(newUser.uid).toEqual(expect.any(String));
  });
  it('returns the user name', () => {
    expect(newUser.name).toBe('Ben');
  });
  it('returns the user email', () => {
    expect(newUser.email).toBe('name@email.com');
  });
  it('returns the user password', () => {
    expect(newUser.password).toBe('123abc');
  });
});
