const User = require('../lib/User.js');

describe('User Class', () => {
  it('creates User object', () => {
    const expected = {
      name: 'Tommy',
      email: 'tommy@tran.com',
      password: '******'
    };
    const input = ['Tommy', 'tommy@tran.com', '******'];
    const result = new User(...input);

    expect(result.name).toEqual(expected.name);
    expect(result.email).toEqual(expected.email);
    expect(result.password).toEqual(expected.password);
    expect.any(result._id);
  });
});
