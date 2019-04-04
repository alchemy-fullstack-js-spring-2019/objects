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
    it('resets password', () => {
        const oldPassword = 'secret';
        const newPassword = 'secret2';
        expect(user.resetPassword(oldPassword, newPassword)).toEqual('secret2');
    });
    it('throws error if oldPassword doesnt match password', () => {
        const oldPassword = 'bob';
        const newPassword = 'secret2';
        expect(() => {
            user.resetPassword(oldPassword, newPassword);
        }).toThrow();
    });
    it('prints username and email in string', () => {
        expect(user.toString()).toEqual('megan | megan@megan.com');
    });
});
