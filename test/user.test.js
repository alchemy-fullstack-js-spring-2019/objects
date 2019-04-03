const { User } = require('../lib/user');

describe('User Tests', ()=> {
    let myUser = null;
    beforeEach(() => { //runs this code before each test is run
        myUser = new User('emily', 'emilyrbaier@gmail.com', 'coolpassword');
    });

    it('user has email', ()=> {
        expect(myUser.name).toBeEqual('emily');
    });
    
});
