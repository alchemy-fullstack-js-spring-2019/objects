const uuidv1 = require('uuid/v1');

module.exports = class User {
  constructor(name, email, password) {
    this.uid = uuidv1();
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
      throw 'old password and current password does not match';
    }
  }
};

