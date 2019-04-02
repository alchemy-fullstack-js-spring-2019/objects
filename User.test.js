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
});
