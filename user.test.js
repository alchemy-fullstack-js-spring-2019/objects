const User = require('./user');

describe('user class', () => {
  let user = null;
  beforeEach(() => {
    user = new User('Leo', 'leo@leo.leo', 'leo123');
  });

  it('returns the user id', () => {
    expect(user.id).toEqual(expect.any(String));
  });

  it('returns the user name', () => {
    expect(user.name).toBe('Leo');
  }); 

  it('returns the user email', () => {
    expect(user.email).toBe('leo@leo.leo');
  }); 

  it('returns the user password', () => {
    expect(user.password).toBe('leo123');
  });  

  it('prints the user name and email toString', () => {
    expect(user.toString()).toBe('Leo | leo@leo.leo');
  }); 

  it('returns the user name', () => {
    expect(user.name).toBe('Leo');
  });  

  it('changes the user password', () => {
    user.resetPassword('leo123', 'Leo18');
    expect(user.password).toBe('Leo18');
  });  

  it('throws error for invalid password', () => {
    expect(() => {
      user.resetPassword('leo123', 'Leo18').toThrow('invalid');
    });
  });
});




