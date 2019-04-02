const { AnimalConstructor, AnimalFactory } = require('../lib/animal.js');


describe('Animal Constructor', () => {
  it('has boots speak', () => {
    const expected = 'I\'m Boots, the monkey!';
    const input = ['Boots', 'monkey'];
    const boots = new AnimalConstructor(...input);
    const result = boots.speak();
    
    expect(boots.name).toEqual('Boots');
    expect(boots.species).toEqual('monkey');
    expect(result).toEqual(expected);
  });

  it('has swiper speak', () => {
    const expected = 'I\'m Swiper, the fox!';
    const input = ['Swiper', 'fox'];
    const swiper = new AnimalConstructor(...input);
    const result = swiper.speak();

    expect(result).toEqual(expected);
  });
});

describe('Animal Factory', () => {
  it('has boots speak', () => {
    const expected = 'I\'m Boots, the monkey!';
    const input = ['Boots', 'monkey'];
    const boots = AnimalFactory(...input);
    const result = boots.speak();

    expect(boots.name).toEqual('Boots');
    expect(boots.species).toEqual('monkey');
    expect(result).toEqual(expected);
  });

  it('has swiper speak', () => {
    const expected = 'I\'m Swiper, the fox!';
    const input = ['Swiper', 'fox'];
    const swiper = new AnimalConstructor(...input);
    const result = swiper.speak();

    expect(result).toEqual(expected);
  });
});
