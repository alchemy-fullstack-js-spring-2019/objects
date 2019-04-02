const uuidv1 = require('uuid/v1');

module.exports = class User {
  constructor(name, email, password) {
    this.uid = uuidv1();
    this.name = name;
    this.email = email;
    this.password = password;
  }
};

