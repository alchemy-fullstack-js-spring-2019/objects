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
        expect(user.id).toEqual(expect.anything());
    });
    
});
