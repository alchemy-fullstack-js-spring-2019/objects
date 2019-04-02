const Colors = require('../lib/Colors');

describe('Colors class', () => {
    const myColor = new Colors();
    it('initializes an empty array of favorites', () => {
        const result = myColor.favorites;
        expect(result).toEqual([]);
    });
    it('add a color to favorites', () => {
        myColor.addColor('red');
        const result = myColor.favorites;
        expect(result).toEqual(['red']);
    });
    it('add another color to favorites', () => {
        myColor.addColor('blue');
        const result = myColor.favorites;
        expect(result).toEqual(['red', 'blue']);
    });
});