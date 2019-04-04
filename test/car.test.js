const Car = require('../lib/car');

describe('car class', () => {
    it('has a make property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray');
        expect(myCar.make).toEqual('honda');
    });
    it('has a model property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray');
        expect(myCar.model).toEqual('fit');
    });
    it('has a year property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray');
        expect(myCar.year).toEqual(2017);
    });
    it('has a color property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray');
        expect(myCar.color).toEqual('gray');
    });
    it('has a miles property', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray');
        expect(myCar.miles).toEqual(0);
    });
    it('has a method for drive', () => {
        const myCar = new Car('honda', 'fit', 2017, 'gray', 0);
        myCar.drive(15);
        expect(myCar.miles).toEqual(15);
    });
    it('has a makes static method', () => {
        expect(Car.makes()).toEqual([
            'honda',
            'toyota',
            'ford',
            'bmw'
        ]);
    });
    it('throws when a car make is invalid', () => {
        expect(() => {
            const myBadCar = new Car('red', 'x', 'funmobile');
        }).toThrow();
    });
});
