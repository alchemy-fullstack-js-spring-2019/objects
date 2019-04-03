const User = require('../lib/User');

describe('User class', () => {
    const user = new User('DoodleBob', 'doodlebob@gmail.com', 'bobdoodle');
    it('has property name', () => {
        expect(user.name).toEqual('DoodleBob');
    });
    it('has property email', () => {
        expect(user.email).toEqual('doodlebob@gmail.com');
    });
    it('has property password', () => {
        expect(user.password).toEqual('bobdoodle');
    });
    it('has property id', () => {
        expect(user.id).toEqual(expect.any(String));
    });
    it('has toString method', () => {
        expect(user.toString()).toEqual('Doodlebob | doodlebob@gmail.com');
    });
    it('has resetPassword method', () => {
        const user = new User('DoodleBob', 'doodlebob@gmail.com', 'bobdoodle');
        user.resetPassword('bobdoodle', 'fish');
        expect(user.password).toEqual('fish');
    });
    it('throws error if resetPassword has wrong old password', () => {
        const user = new User('DoodleBob', 'doodlebob@gmail.com', 'bobdoodle');
        expect(user.resetPassword('baby', 'dog')).toThrow('Old password is incorrect');
    });
    
});
