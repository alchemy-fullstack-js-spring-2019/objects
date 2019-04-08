const Car = require('../lib/Car');

describe('car class', () => {
    const truck = new Car('Toyota', 'Tacoma', 1995, 'white');
    it('has make property', () => {
        expect(truck.make).toEqual('Toyota');
    });
    it('has model property', () => {
        expect(truck.model).toEqual('Tacoma');
    });
    it('has year property', () => {
        expect(truck.year).toEqual(1995);
    });
    it('has color property', () => {
        expect(truck.color).toEqual('white');
    });
    it('has miles property', () => {
        expect(truck.miles).toEqual(0);
    });
    it('has drive method', () => {
        expect(truck.drive(200)).toEqual(200);
    });
    it('has static makes method', () => {
        expect(Car.makes()).toEqual(['Toyota', 'Ford', 'Nissan']);
    });
    it('it throws when car is made with an invalid make', () => {
        expect(() => {
            new Car('Honda', 'Fit', 1995, 'red');
        }).toThrow();
    });
});
