const uuidv4 = require('uuid/v4');

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = uuidv4();
    this._ct = ++User.counter;
  }
  
  toString(){
    return `${this.name} | ${this.email}`;
  }
  resetPassword(oldPassword, newPassword){
    if(oldPassword === this.password){
      this.password = newPassword;
    } else { throw 'NOPE';
    }
  }
  static count() {
    return User.counter.toString();
  }
}
User.counter = 0;

module.exports = { User };
