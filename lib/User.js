// * BONUS: create a `count` method
//   * `count` method counts the number of times a user has been created (`new User()`)
const uuid = require('uuid');

class User {
    constructor(name, email, password) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    toString() {
        return `${this.name} | ${this.email}`;
    }

    resetPassword(oldPassword, newPassword) {
        if(oldPassword === this.password) {
            this.password = newPassword;
        }
        else {
            throw 'invalid password';
        }
    }
}

module.exports = User;
