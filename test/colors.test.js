const Colors = require('../lib/colors');

describe('colors class', () => {
    let colors = null;
    beforeEach(() => {
        colors = new Colors();
    });

    it('has a list of favorite colors', () => {
        expect(colors.favorites).toEqual([]);
    });
    it('has an addColor method to add favorites', () => {
        colors.addColor('blue');
        expect(colors.favorites).toContainEqual('blue');
    });
    it('can check if favorites has color', () => {
        colors.addColor('blue');
        expect(colors.hasColor('blue')).toBeTruthy();
        expect(colors.hasColor('red')).toBeFalsy();
    });

});
