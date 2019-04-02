const User = require('../lib/User');

describe('User', () => {
    const user = new User('Bonnie', 'bonniebmcneil@gmail.com', 'hello');
    it('puts the lotion on its skin, or', () => {
        expect(user.name).toBe('Bonnie');
    });
    it('gets the hose again', () => {
        expect(user.email).toBe('bonniebmcneil@gmail.com');
    });
    it('toString', () => {
        expect(user.toString()).toBe('Bonnie | bonniebmcneil@gmail.com');
    });
    it('change password', () => {
        user.resetPassword('hello', 'goodbye');
        expect(user.password).toBe('goodbye');
    });
    it('don\'t change password', () => {   
        expect(() => user.resetPassword('goobee', 'hello')).toThrow('invalid password');
    });
});
