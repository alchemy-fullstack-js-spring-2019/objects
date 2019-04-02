const uid = require('uuid/v4');

class User {
  constructor(name, email, password) {
    this.uid = uid(),
    this.name = name,
    this.email = email,
    this.password = password;
  }
  toString() {
    return `${this.name} | ${this.email}`;
  }
}

module.exports = User;
