const Colors = require('../lib/Colors');

describe('Colors class', () => {
    const myColor = new Colors();
    it('initializes an empty array of favorites', () => {
        const result = myColor.favorites;
        expect(result).toEqual([]);
    });
});