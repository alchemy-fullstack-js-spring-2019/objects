const { 
  AnimalConstructor,
  AnimalConstructorAlt,
  AnimalFactory,
  AnimalClass
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

describe('animal constructor alt', () => {
  it('takes a name and returns a string containing it', () => {
    const animal = new AnimalConstructorAlt('Hannah', 'Banana Eater');
    expect(animal.name).toEqual('Hannah');
  });
  it('also takes a species and adds it to the above string', () => {
    const animal = new AnimalConstructorAlt('Becky', 'Blue Footed Boobie');
    expect(animal.species).toEqual('Blue Footed Boobie');
  });
  it('can speak', () => {
    const animal = new AnimalConstructorAlt('Tay', 'Blue Jay');
    expect(animal.speak()).toEqual('Hi! I am Tay the Blue Jay.');
  });
});

describe('animal factory function', () => {
  it('returns an animal object', () => {
    const animal = new AnimalFactory('Billy', 'goat');
    expect({ animal }).exists;
  });
  it('returns the name', () => {
    const animal = new AnimalFactory('Larry', 'Llama');
    expect(animal.name).toEqual('Larry'); 
  });
  it('returns the species', () => {
    const animal = AnimalFactory('Larry', 'Llama');
    expect(animal.species).toEqual('Llama');
  });
  it('can speak', () => {
    const animal = AnimalFactory('Larry', 'Llama');
    expect(animal.speak()).toEqual('Hi! I am Larry the Llama.');
  });
});

describe('animal class function', () => {
  it('returns the name and species together', () => {
    const animal = new AnimalClass('Katniss', 'Cat');
    expect(animal.name && animal.species).toEqual('Katniss' && 'Cat');
  });
  it('returns the name and species together with a different test', () => {
    const animal = new AnimalClass('Katniss', 'Cat');
    expect(animal.name + animal.species).toEqual('Katniss' + 'Cat');
  });
  it('can speak', () => {
    const animal = new AnimalClass('Katniss', 'Cat');
    expect(animal.speak()).toEqual('Hi! I am Katniss the Cat.');
  });
});
