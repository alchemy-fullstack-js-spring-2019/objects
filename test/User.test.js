const User = require('../lib/User');

describe('User Class', () => {
  it('Has id, name, email, and password', () => {
    const result = new User('Chris', 'chris@chris.com', 'password');

    expect(result.name).toEqual('Chris');
    expect(result.email).toEqual('chris@chris.com');
    expect(result.password).toEqual('password');
    expect.any(result.id);
  });
  
  it('Has toString which prints the user name and email', () => {
    const result = new User('Chris', 'chris@chris.com', 'password');

    expect(result.toString()).toEqual('Chris | chris@chris.com');
  });
  
  it('Has resetPassword which checks for old password and updates otherwise throw an error', () => {
    const result = new User('Chris', 'chris@chris.com', 'password');
    result.resetPassword('password', 'new');
    
    expect(result.password).toEqual('new');

    const expected = 'Error: passwords do not match';
    expect(() => {
      result.resetPassword('password', 'newnew');
    }).toThrowError(expected);
  });
});
