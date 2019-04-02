const Colors = require('../lib/Colors');

describe('Colors', () => {
    it('has a favorites property', () => {
        const color = new Colors();
        expect(color.favorites).toEqual([]);
    });
    it('has addColor method', () => {
        const color = new Colors();
        color.addColor('blue');
        expect(color.favorites).toContainEqual('blue');
    });
    it('hasColor method returns true if has color', () => {
        const color = new Colors();
        color.addColor('blue');
        expect(color.hasColor('blue')).toEqual(true);
    });
    it('hasColor method returns false if doesnt have color', () => {
        const color = new Colors();
        color.addColor('blue');
        expect(color.hasColor('green')).toEqual(false);
    });
});
