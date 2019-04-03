const {
  AnimalConstructor
} = require('./animals');

describe('animal object creators', () => {
  describe('AnimalConstructor', () => {
    it('has name property', () => {
      const cat = new AnimalConstructor('ruby');
      expect(cat.name).toEqual('ruby');
    });
  });
  it('has a species property', () => {
    const cat = new AnimalConstructor('ruby');
    expect(cat.speak()).toEqual('My name is ruby');
  });
});

// describe('AnimalFactory', () => {
//   it('has a name property')
// });

// describe('AnimalClass', () => {
// it('has a name property', () => {
// 
// });
// });
