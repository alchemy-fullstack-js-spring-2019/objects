let uuid = require('./uuid');

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
    } else {
      throw 'entered password is invalid';
    }
    return `${this.name} | ${this.email}`;
  }
}

module.exports = User;
