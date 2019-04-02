const { House } = require('../lib/house');

describe('house class tests', ()=> {
    it('will apply a location property', ()=> {
        const house = new House('foster-powell', 2, 3, 3);
        expect(house.location).toEqual('foster-powell');
    });
    it('will apply a floors property', ()=> {
        const house = new House('foster-powell', 2, 3, 3);
        expect(house.floors).toEqual(2);
    });
    it('will apply a bedrooms property', ()=> {
        const house = new House('foster-powell', 2, 3, 3);
        expect(house.bedrooms).toEqual(3);
    });
    it('will apply a bathrooms property', ()=> {
        const house = new House('foster-powell', 2, 3, 3);
        expect(house.bathrooms).toEqual(3);
    });
    it('will give a price based on equation', ()=> {
        const house = new House('foster-powell', 2, 3, 3);
        expect(house.housePrice()).toEqual(90000);
    });
});
