const { AnimalConstructor, AnimalFactory } = require('../lib/constructor');

describe('animal constructor', () => {
  it('creates animal steve, tiger', () => {
    const steve = new AnimalConstructor('steve', 'tiger');
    expect(steve.name).toEqual('steve');
  });
  it('creates animal steve, tiger', () => {
    const steve = new AnimalConstructor('steve', 'tiger');
    expect(steve.species).toEqual('tiger');
  });
  it('add say hi prototype to AnimalConstructor', () => {
    const steve = new AnimalConstructor('steve', 'tiger');
    expect(steve.sayHi()).toEqual('Hi my name is steve');
  });
});

describe('animal factory', () => {
  it('creates animal steve, tiger', () => {
    const steve = AnimalFactory('steve', 'tiger');
    expect(steve.name).toEqual('steve');
  });
  it('creates animal steve, tiger', () => {
    const steve = AnimalFactory('steve', 'tiger');
    expect(steve.species).toEqual('tiger');
  });
  it('add say hi prototype to animalFactory', () => {
    const steve = AnimalFactory('steve', 'tiger');
    expect(steve.sayHi()).toEqual('Hi my name is steve');
  });
});




