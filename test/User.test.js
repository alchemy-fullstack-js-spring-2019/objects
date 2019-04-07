const { User } = require('../lib/User');

describe('user class', () => {
  it('returns the expected name, email and password', () => {
    const user = new User('Friedrich', 'e@mail.com', 'mypassword');
    expect(user.name + user.email + user.password).toEqual('Friedriche@mail.commypassword');
  });
  it('returns a string with name and email', () => {
    const user = new User('Friedrich', 'e@mail.com', 'mypassword');
    expect(user.toString()).toEqual('Friedrich + e@mail.com');
  });
  it('has a generated id', () => {
    const user = new User('Friedrich', 'e@mail.com', 'mypassword');
    expect(user.id).exists;
  });
  it('can update the password', () => {
    const userOld = new User('Friedrich', 'e@mail.com', 'oldpassword');
    expect(userOld.resetPassword('oldpassword', 'newpassword')).toEqual(this.password);
  });
});
