const User = require('../lib/User.js');

describe('User Class', () => {
  let user;
  beforeEach(() => {
    user = new User('Tommy', 'tommy@tran.com', '******');
  });

  it('creates User object', () => {
    const expected = {
      name: 'Tommy',
      email: 'tommy@tran.com',
      password: '******'
    };
    const result = user;

    expect(result.name).toEqual(expected.name);
    expect(result.email).toEqual(expected.email);
    expect(result.password).toEqual(expected.password);
    expect.any(result._id);
  });

  it('returns string of name and email', () => {
    const expected = 'Tommy | tommy@tran.com';
    const result = user.toString();

    expect(result).toEqual(expected);
  });

  it('changes the password if the supplied password is correct', () => {
    const expected = 'P@ssw0rd';
    user.changePassword('******', 'P@ssw0rd');
    const result = user.password;
    expect(result).toEqual(expected);
  });
});
