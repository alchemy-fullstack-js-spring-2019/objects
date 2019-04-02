const Car = require('../lib/car');

describe('car class', () => {
    it('has a make property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray', 0);
        expect(myCar.make).toEqual('honda');
    });
    it('has a model property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray', 0);
        expect(myCar.model).toEqual('fit');
    });
    it('has a year property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray', 0);
        expect(myCar.year).toEqual(2017);
    });
    it('has a color property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray', 0);
        expect(myCar.color).toEqual('gray');
    });
    it('has a miles property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray', 0);
        expect(myCar.miles).toEqual(0);
    });
});
