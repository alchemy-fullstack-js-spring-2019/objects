const House = require('../lib/House');

describe('house class', () => {
    it('has location property', () => {
        const cabin = new House('woods', 1, 2, 0);
        expect(cabin.location).toEqual('woods');
    });
    it('has floors property', () => {
        const cabin = new House('woods', 1, 2, 0);
        expect(cabin.floors).toEqual(1);
    });
    it('has bedrooms property', () => {
        const cabin = new House('woods', 1, 2, 0);
        expect(cabin.bedrooms).toEqual(2);
    });
    it('has bathrooms property', () => {
        const cabin = new House('woods', 1, 2, 0);
        expect(cabin.bathrooms).toEqual(0);
    });
    it('has price method', () => {
        const cabin = new House('woods', 1, 2, 0);
        expect(cabin.price()).toEqual(200000);
    });
});
