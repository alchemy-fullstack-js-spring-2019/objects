// npm i uuid
const uuid = require('uuid/v4');

console.log(uuid());
console.log(uuid());
console.log(uuid());

const store = {
  [uuid()]: someValue
};

// can't test for what the uuid will be
expect(uuid()).toEqual(expect.any(String));
