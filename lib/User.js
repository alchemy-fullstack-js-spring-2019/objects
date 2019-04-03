const uuid = require('uuid/v4');

module.exports = class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this._id = uuid();
  }
  toString() {
    return `${this.name} | ${this.email}`;
  }
  changePassword(oldPassword, newPassword) {
    if(oldPassword === this.password) {
      this.password = newPassword;
    } else {
      throw 'Passwords don\'t match!';
    }
  }
};
