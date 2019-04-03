const { User } = require('../lib/User.js');

describe('user function', () => {
    it('has a name', () => {
        const profile = new User('iceman');
        expect(profile.name).toEqual('iceman');
    });
    it('has an email', () => {
        const profile = new User('blah@blah.com');
        expect(profile.name).toEqual('blah@blah.com');
    });
    it('has an email', () => {
        const profile = new User('blah@blah.com');
        expect(profile.name).toEqual('blah@blah.com');
    });
});
