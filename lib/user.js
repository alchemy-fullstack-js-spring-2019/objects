class User {
  constructor(name, email, password) {
    const uid = require('uuid/v4');
    this.uid = uid(),
    this.name = name,
    this.email = email,
    this.password = password;
  }
}

module.exports = User;
