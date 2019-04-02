const { animalConstructor } = require('../lib/index');
const { animalFactory } = require('../lib/index');
const { Person } = require('../lib/index');


describe('animal constructor', () => {
  test('animal function returns string with speak', () => {
    const name = 'steve';
    const species = 'elephant';
    const string = animalConstructor(name, species);
    expect(string).toEqual('steve');
  });
});

describe('animal factory', () => {
  test('returns object that takes two params and string', () => {
    const name = 'steve';
    const species = 'turtle';
    const steve = animalFactory(name, species);
    const object = steve.speak();
    expect(object).toEqual('Hi, my name is steve');
    expect(steve.name).toEqual('steve');
    expect(steve.species).toEqual('turtle');
  });
});



describe('animal class', () => {
  test('takes two params returns string with speak', () => {
    const name = 'bobo';
    const species = 'spider';
    const bobo = new Person(name, species);
    const string = bobo.speak();
    expect(string).toEqual('Yes, my name is still bobo');
  });
})
;
