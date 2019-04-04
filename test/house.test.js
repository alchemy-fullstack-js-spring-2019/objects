const House = require('../lib/house');

describe('House class function', () => {
    let home = null;
    beforeEach(() => {
        home = new House('portland', 2, 4, 3);
    });
    it('has a location property', () => {
        expect(home.location).toEqual('portland');
    });
    it('has a floors property', () => {
        expect(home.floors).toEqual(2);
    });
    it('has a bedrooms property', () => {
        expect(home.bedrooms).toEqual(4);
    });
    it('has a bathrooms property', () => {
        expect(home.bathrooms).toEqual(3);
    });
    it('has a price calculator', () => {
        expect(home.price()).toEqual(20000);
    });
});
