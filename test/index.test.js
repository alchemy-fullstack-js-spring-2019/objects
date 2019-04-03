const { AnimalConstructor } = require('../lib/index');
const { AnimalFactory } = require('../lib/index');
const { AnimalClass } = require('../lib/index');


describe('animal constructor', () => {
  test('animal function returns string with speak', () => {
    const name = 'steve';
    const species = 'elephant';
    const elephant = new AnimalConstructor(name, species);
    expect(elephant.name).toBe('steve');
    expect(elephant.species).toBe('elephant');
    expect(elephant.speak()).toEqual('steve');
  });
});

describe('animal factory', () => {
  test('returns object that takes two params and string', () => {
    const name = 'steve';
    const species = 'turtle';
    const steve = AnimalFactory(name, species);
    expect(steve.speak()).toEqual('Hi, my name is steve');
    expect(steve.name).toEqual('steve');
    expect(steve.species).toEqual('turtle');
  });
});


describe('animal class', () => {
  test('takes two params returns string with speak', () => {
    const name = 'bobo';
    const species = 'spider';
    const bobo = new AnimalClass(name, species);
    const string = bobo.speak();
    expect(bobo.name).toBe('bobo');
    expect(string).toEqual('Yes, my name is still bobo');
  });
})
;
