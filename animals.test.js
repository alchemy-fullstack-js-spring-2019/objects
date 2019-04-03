const {
  AnimalConstructor,
  AnimalFactory,
} = require('./animals');

describe('animal object creators', () => {
  describe('AnimalConstructor', () => {
    it('has name property', () => {
      const cat = new AnimalConstructor('goober');
      expect(cat.name).toEqual('goober');
    });
  });
  it('has a name property', () => {
    const cat = new AnimalConstructor('goober', 'cat');
    expect(cat.name).toEqual('goober');
  });
  it('has a species property', () => {
    const cat = new AnimalConstructor('goober', 'cat');
    expect(cat.species).toEqual('cat');
  });
  it('has a species property', () => {
    const cat = new AnimalConstructor('goober', 'cat');
    expect(cat.speak()).toEqual('My name is goober and I am a cat');
  });
});

describe('AnimalFactory', () => {
  it('has a name property', () => {
    const cat = AnimalFactory('goober', 'cat');
    expect(cat.name).toEqual('goober');
  });
});

// describe('AnimalClass', () => {
// it('has a name property', () => {
// 
// });
// });
