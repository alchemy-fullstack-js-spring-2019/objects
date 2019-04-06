const uuid = require('uuid/v4');
expect(uuid()).toEqual(expect.any(String));

module.exports = uuid;
