const { Animal, AnimalFactory, AnimalClass } = require('./Animals');

describe('tests animal constructor functions', () => {
  const piglet = new Animal('Piglet', 'pig', 5);
  it('returns animal object', () => {
    expect(piglet).toEqual({ name: 'Piglet', species: 'pig', age: 5 });
  });
  it('says its name and species', () => {
    expect(piglet.sayHi()).toEqual('hi my name is Piglet, I am a pig!!!');
  });
});
describe('tests animal factory functions', () => {
  const piglet = AnimalFactory('Piglet', 'pig', 5);
  it('returns name', () => {
    expect(piglet.name).toEqual('Piglet');
  });
  it('returns species', () => {
    expect(piglet.species).toEqual('pig');
  });
  it('says its name and species', () => {
    expect(piglet.sayHi()).toEqual('hi my name is Piglet, I am a pig!!!');
  });
});

describe('tests animal class functions', () => {
  const piglet = new AnimalClass('Piglet', 'pig', 5);
  it('returns name', () => {
    expect(piglet.name).toEqual('Piglet');
  });
  it('returns species', () => {
    expect(piglet.species).toEqual('pig');
  });
  it('says its name and species', () => {
    expect(piglet.sayHi()).toEqual('hi my name is Piglet, I am a pig!!!');
  });
});
