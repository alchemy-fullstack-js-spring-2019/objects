const { Car } = require('../lib/Car.js');

describe('car class function', () => {
    it('has make, model, year, color, miles', () => {
        const drive = new Car('honda', 'civic', '1990', 'green');
        expect(drive).toEqual({ 'color': 'green', 'make': 'honda', 'miles': 0, 'model': 'civic', 'year': '1990' });
    });
    it('has make, model, year, color, miles', () => {
        const drive = new Car('honda', 'civic', '1990', 'green');
        expect(drive).toEqual({ 'color': 'green', 'make': 'honda', 'miles': 0, 'model': 'civic', 'year': '1990' });
    });
    it('has drive function', () => {
        const drive = new Car();
        expect(drive.drive(20)).toEqual(20);
    });
    it('has static make function', () => {
        new Car('honda', 'civic', '1990', 'green');
        expect(Car.make()).toEqual(['honda', 'ford', 'saturn']);
    });
});
