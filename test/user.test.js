const User = require('../lib/User');

describe('user function', () => {
  it('returns an object by id', () => {
    const id = database1.create(objectToSave);
    expect(database1.store[id]).toEqual(
      { _id: id,
        name: 'jonies',
        email: 'person@email.com',
        password: 'password1'
      }
    );
  });});
