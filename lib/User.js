const uuid = require('uuid');
let count = 0;

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = uuid();
    count += 1;
  }
  toString() {
    return `${ this.name } + ${ this.email }`;
  }
  resetPassword(oldPassword, newPassword) {
    if(oldPassword !== this.password) {
      throw 'invalid original password';
    }
    this.password = newPassword;
  }
  static count() {
    return count;
  }
}

module.exports = { User };
