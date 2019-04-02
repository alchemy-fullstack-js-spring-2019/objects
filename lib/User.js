const uuidv1 = require('uuid/v1');

class User {
  constructor(name, email, password) {
    this.id = uuidv1();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  toString() {
    return `${this.name} | ${this.email}`;
  }

  resetPassword(oldPassword, newPassword) {
    if(this.password === oldPassword) {
      this.password = newPassword;
    } else {
      throw 'Error: passwords do not match';
    }
  }
}

module.exports = User;
