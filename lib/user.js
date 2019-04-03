const uuid = require('uuid/v4');

module.exports = class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.uid = uuid();
    }
    resetPassword(oldPassword, newPassword) {
        if(this.password !== oldPassword) {
            throw 'invalid password';
        }
        this.password = newPassword;
        return this.password;
    }
    toString() {
        return `${this.name} | ${this.email}`;
    }
};
