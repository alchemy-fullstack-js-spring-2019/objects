class User{
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        
        const uuidv4 = require('uuid/v4');
        this.id = uuidv4();
    }
}

module.exports = User;
