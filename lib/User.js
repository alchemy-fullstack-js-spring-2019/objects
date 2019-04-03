// * BONUS: create a `count` method
//   * `count` method counts the number of times a user has been created (`new User()`)
const uuid = require('uuid');

class User {
    // count = 1;

    // static count() {
    //     if(!count) {
    //         var count = 1;
    //     }
    //     else count++;
    //     return count;
    // }

    constructor(name, email, password) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        // User.count();
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
