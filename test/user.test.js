const User = require('../lib/user');

describe('creates User class', () => {
    let user = null;
    beforeEach(() => {
        user = new User('megan', 'megan@megan.com', 'secret');
    });
    it('has a name property', () => {
        expect(user.name).toEqual('megan');
    });
    it('has an email property', () => {
        expect(user.email).toEqual('megan@megan.com');
    });
    it('has a password property', () => {
        expect(user.password).toEqual('secret');
    });
    it('has a uid property', () => {
        expect(user.uid).toEqual(expect.any(String));
    });
});
