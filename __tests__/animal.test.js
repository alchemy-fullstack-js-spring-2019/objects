const  {
  AnimalConstructor 

} = require('./animal');

describe('create animal object', () => {
  describe('the animal constructor', () => {
    it('takes a name property', () => {
      const beetle = new AnimalConstructor('dung', 'beetle');
      expect(beetle.name).toEqual('dung');
    });

    it('can have a species', () => {
      const beetle = new AnimalConstructor('dung', 'beetle');
      expect(beetle.species).toEqual('beetle');
    });

    it('can take a property that speaks', () => {
      const beetle = new AnimalConstructor('dung', 'beetle');
      expect(beetle.speak()).toEqual('I\'m dung and I\'m a beetle');

    });
  });

});

