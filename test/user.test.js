const User = require('../lib/user');

describe('creates User class', () => {
    let user = null;
    beforeEach(() => {
        user = new User('megan', 'megan@megan.com', 'secret');
    });
    it('has an id property', () => {
        expect(user.name).toEqual('megan');
    });
})
