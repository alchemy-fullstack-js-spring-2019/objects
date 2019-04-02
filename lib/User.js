// * Create a `User` class in `User.js` and a `User.test.js`
// * a user has an id, name, email, and password
//   * name, email, and password are passed into the constructor
//   * id is generated (use the `uuid` module `npm i uuid`)
// * create a `toString` method
//   * `toString` should print the users name and email `Ryan | ryan@test.com`
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
}

module.exports = User;
