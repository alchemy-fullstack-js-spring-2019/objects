const { 
  AnimalConstructor
} = require('../lib/animal');

describe('animal constructor function', () => {
  const animal = new AnimalConstructor('Hank', 'zebra');
  it('takes a name and returns a string containing it', () => {
    expect(animal.name).toEqual('Hank');
  });
  it('also takes a species and adds it to the above string', () => {
    expect(animal.species).toEqual('zebra');
  });
  it('also can take the name and species and return a "speak()" string', () => {
    expect(animal.speak()).toEqual('Hi! I am Hank the zebra.');
  });
});

describe('animal factory function', () => {
  it('');
});

