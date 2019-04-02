const House = require('../lib/House');

describe('House class', () => {
    const myHouse = new House('Portland', 1, 2, 1);
    it('has a location', () => {
        expect(myHouse.location).toBe('Portland');
    });
    it('has floors', () => {
        expect(myHouse.floors).toBe(1);
    });
    it('has bedrooms', () => {
        expect(myHouse.bedrooms).toBe(2);
    });
    it('has bathrooms', () => {
        expect(myHouse.bathrooms).toBe(1);
    });
    it('has a price of 5250', () => {
        const result = myHouse.price();
        expect(result).toBe(5250);
    });
});
