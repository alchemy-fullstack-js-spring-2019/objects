const Colors = require('../lib/colors');

describe('colors class', () => {
    it('has a favorites property', () => {
        const myColors = new Colors();
        expect(myColors.favorites).toEqual();
    });
});
