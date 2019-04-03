const User = require('./User');

describe('user tests', () => {
  let MyUser = null;
  beforeEach(() => {
    MyUser = new User('Cosmo', 'cosmo@cosmo.com', 'abc123');
  });
  it('has a name', () => {
    expect(MyUser.name).toEqual('Cosmo');
  });
  it('has a email', () => {
    expect(MyUser.email).toEqual('cosmo@cosmo.com');
  });
  it('has a password', () => {
    expect(MyUser.password).toEqual('abc123');
  });
  it('has an id', () => {
    expect(MyUser.uid).toBeDefined();
  });
  it('has a toString method that prints the users name', () => {
    expect(MyUser.toString()).toEqual('Cosmo | cosmo@cosmo.com');
  });
  it('has a reset password method', () => {
    const newPassword = 'def456';
    const oldPassword = 'abc123';
    MyUser.resetPassword(oldPassword, newPassword);
    expect(MyUser.password).toEqual(newPassword);
  });
  it('bad password throws error', () => {
    const newPassword = 'def456';
    const badPassword = '';
    expect(() => {
      const secondUser = new User('jane', 'jane@jane.com', '123abc');
      secondUser.resetPassword('', 'newpass');
    }).toThrow();
  });
});
