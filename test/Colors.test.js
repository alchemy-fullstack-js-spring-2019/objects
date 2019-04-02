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
    it('checks if a color is a favorite', () => {
        const result = myColor.hasColor('blue');
        expect(result).toBe(true);
    });
    it('checks if a color is a not favorite', () => {
        const result = myColor.hasColor('green');
        expect(result).toBe(false);
    });
});
