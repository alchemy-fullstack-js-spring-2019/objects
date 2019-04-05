const { Color } = require('../lib/Color.js');

describe('colors class', () => {
    it('has a favorites property', () => {
        const hue = new Color();
        expect(hue.favorites).toEqual([]);
    });
    it('has addColor method', () => {
        const hue = new Color();
        expect(hue.addColor('green')).toEqual(['green']);
    });
    it('hasColors method', () => {
        const hue = new Color();
        hue.addColor('green');
        expect(hue.hasColor('green')).toBeTruthy();
        expect(hue.hasColor('red')).toBeFalsy();
    });
});
