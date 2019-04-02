const { House } = require('../lib/house');

describe('house class tests', ()=> {
    const house = new House('foster-powell', 2, 3, 3);
    it('has a location property', ()=> {
        expect(house.location).toEqual('foster-powell');
    });
    it('has a floors property', ()=> {
        expect(house.floors).toEqual(2);
    });
    it('has a bedrooms property', ()=> {
        expect(house.bedrooms).toEqual(3);
    });
    it('has a bathrooms property', ()=> {
        expect(house.bathrooms).toEqual(3);
    });
    it('has a price based on equation', ()=> {
        expect(house.housePrice()).toEqual(90000);
    });
});
