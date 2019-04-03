const uuid = require('uuid/v4');

module.exports = class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.uid = expect.any(String);
    }
    resetPassword(newPassword) {
        this.password = newPassword;
        return this.password;
    }
};
