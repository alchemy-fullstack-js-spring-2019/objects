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
    it('has uuid', () => {
        const profile = new User();
        expect(profile.id).toEqual(expect.any(String));
    });
    it('toString returns name and email', () => {
        const profile = new User('Fran', 'Fran@fran.com', 'fran');
        expect(profile.toString()).toEqual('Fran | Fran@fran.com');
    });
    it('resetPassword function sets new passwords', () => {
        const profile = new User('Fran', 'Fran@fran.com', 'fran');
        expect(profile.resetPassword('fran', 'billy')).toEqual('billy');
    });
    it('error thrown if doesnt have proper params', () => {
        const profile = new User('Fran', 'Fran@fran.com', 'fran');
        expect(profile.resetPassword()).toThrow('error');
    });
});
