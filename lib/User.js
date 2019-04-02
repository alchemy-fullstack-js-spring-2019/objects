// * create a `resetPassword` method
//   * `resetPassword` takes the `oldPassword` and a `newPassword`
//   * if `oldPassword` matches `password` set `password` to `newPassword`
//   * if `oldPassword` doesn't match `password` throw an error
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
}

module.exports = User;
