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
  it('prints the user name and email when toString is called', () => {
    expect(newUser.toString()).toBe('Ben | name@email.com');
  });
  it('resents the password if the old password matches', () => {
    expect(newUser.resetPassword('123abc', '456def')).toBe('456def');
  });
  it('throws an error if oldPassword doenst match current password', () => {
    expect(() => {
      newUser.resetPassword('abc123', 'twz677');
    }).toThrow();
  });
});
