const House = require('../lib/house');

describe('House class function', () => {
    it('has a location property', () => {
        const home = new House('portland', 2, 4, 3);
        expect(home.location).toEqual('portland');
    });
    it('has a floors property', () => {
        const home = new House('portland', 2, 4, 3);
        expect(home.floors).toEqual(2);
    });
    it('has a bedrooms property', () => {
        const home = new House('portland', 2, 4, 3);
        expect(home.bedrooms).toEqual(4);
    });
    it('has a bathrooms property', () => {
        const home = new House('portland', 2, 4, 3);
        expect(home.bathrooms).toEqual(3);
    });
    it('has a price calculator', () => {
        const home = new House('portland', 2, 4, 3);
        expect(home.price()).toEqual(20000);
    });
});
