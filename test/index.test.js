const { animalConstructor, animalFactory, animalClass } = require('../lib/index');

describe('ANIMAL TESTS', () => {
  describe('Constructor', () => {
    it('has a name property', () => {
      const bear = new animalConstructor('yogi', 'bear');
      expect(bear.name).toEqual('yogi');
    });
    it('has a species property', () => {
      const bear = new animalConstructor('yogi', 'bear');
      expect(bear.species).toEqual('bear');
    });
    it('make it speak', () => {
      const bear = new animalConstructor('yogi', 'bear');
      expect(bear.speak()).toEqual('My name is yogi and I am a bear');
    });
  });
  
  describe('Factory', () => {
    it('has a name property', () => {
      const bear = animalFactory('yogi', 'bear');
      expect(bear.name).toEqual('yogi');
    });
    it('has a species property', () => {
      const bear = animalFactory('yogi', 'bear');
      expect(bear.species).toEqual('bear');
    });
    it('speak', () => {
      const bear = animalFactory('yogi', 'bear');
      expect(bear.speak()).toEqual('My name is yogi and I am a bear');
    });
  });
  
  describe('Class', () => {
    it('has a name property', () => {
      const bear = new animalClass('yogi', 'bear');
      expect(bear.name).toEqual('yogi');
    });
    it('has a species property', () => {
      const bear = new animalClass('yogi', 'bear');
      expect(bear.species).toEqual('bear');
    });
    it('speak', () => {
      const bear = new animalClass('yogi', 'bear');
      expect(bear.speak()).toEqual('My name is yogi and I am a bear');
    });
  });
});
