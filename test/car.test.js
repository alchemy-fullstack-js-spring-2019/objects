const Car = require('../lib/car');

describe('car class', () => {
    it('has a make property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray', 0);
        expect(myCar.make).toEqual('honda');
    });
});
