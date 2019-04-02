const uuidv4 = require('uuid/v4');

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = uuidv4();
  }
  toString(){
    return `${this.name} | ${this.email}`;
  }
}


module.exports = { User };
