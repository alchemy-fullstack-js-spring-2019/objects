const House = require('../lib/House');

describe('House class', () => {
    it('makes a House with 1 floor 2 bed 1 bath, returns price 5250', () => {
        const myHouse = new House('Portland', 1, 2, 1);
        const result = myHouse.price();
        expect(result).toBe(5250);
    });
    it('makes a House in Portland', () => {
        const myHouse = new House('Portland', 1, 2, 1);
        const result = myHouse.location;
        expect(result).toBe('Portland');
    });
});
