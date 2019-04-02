const Car = require('../lib/Car');

describe('Car class', () => {
    const myCar = new Car('Subaru', 'Forester', 2010, 'black');
    it('has the expected make', () => {
        expect(myCar.make).toBe('Subaru');
    });
    it('has the expected model', () => {
        expect(myCar.model).toBe('Forester');
    });
    it('has the expected year', () => {
        expect(myCar.year).toBe(2010);
    });
    it('has the expected color', () => {
        expect(myCar.color).toBe('black');
    });
    it('has the expected miles', () => {
        expect(myCar.miles).toBe(0);
    });
    it('increments miles when drive method called', () => {
        myCar.drive(10);
        expect(myCar.miles).toBe(10);
    });
    it('increments miles when drive method called again', () => {
        myCar.drive(10);
        expect(myCar.miles).toBe(20);
    });
    it('returns an array of makes when makes() is called', () => {
        const result = Car.makes();
        expect(result).toEqual(['Honda', 'Ford', 'Toyota', 'Tesla', 'Subaru', 'Chevrolet']);
    });
});
