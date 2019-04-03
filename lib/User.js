class User{
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        
        const uuidv4 = require('uuid/v4');
        this.id = uuidv4();
    }

    toString() {
        return this.name + ' | ' + this.email;
    }

    resetPassword(oldPassword, newPassword) {
        if(oldPassword === this.password) {
            this.password = newPassword;
        }
        else {
            throw 'Old password is incorrect';
        }
    }
}

module.exports = User;
