const {
  AnimalConstructor
} = require('./animals');

describe('animal object creators', () => {
  describe('AnimalConstructor', () => {
    it('has name property', () => {
      const cat = new AnimalConstructor('goober');
      expect(cat.name).toEqual('goober');
    });
  });
  it('has a species property', () => {
    const cat = new AnimalConstructor('goober', 'cat');
    expect(cat.name).toEqual('goober');
  });
  // it('has a species property', () => {
  //   const cat = new AnimalConstructor('goober');
  //   expect(cat.speak()).toEqual('My name is ');
  // });
});

// describe('AnimalFactory', () => {
//   it('has a name property')
// });

// describe('AnimalClass', () => {
// it('has a name property', () => {
// 
// });
// });
