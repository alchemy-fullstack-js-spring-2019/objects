const { House } = require('../lib/House.js');

describe('house class function', () => {
    it('has a location', () => {
        const place = new House('chicago');
        expect(place.location).toEqual('chicago');
    });
    it('has a location plus other props', () => {
        const place = new House('chicago', '4', '3', '5');
        expect(place.location).toEqual('chicago', '4', '3', '5');
    });
    it('has a price method', () => {
        const place = new House('chicago', '4', '3', '5', '55', '1400');
        expect(place.price()).toEqual(77000);
    });
});
