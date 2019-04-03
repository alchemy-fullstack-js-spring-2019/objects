const uuid = require('uuid/v1');

class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = uuid();
    }
    
    toString() {
        return `${this.name}` + ' | ' + `${this.email}`;
    }

    resetPassword(oldPassword, newPassword) {
        if(oldPassword === this.password) {
            this.password = newPassword;
            return newPassword;
        }
        else throw 'error';
    }
}

module.exports = {
    User
};
