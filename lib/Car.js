// * create a `Car` class in `Car.js` and `Car.test.js`
// * `Car` has a make, model, year, color, miles
//   * make, model, year, color are passed to the constructor
//   * miles is set at 0 initially
//   * test that a new `Car` has the expected
//     make, model, year, miles, and color properties
// * `Car` has a `drive` method that takes `drivenMiles`
//   * increment the `miles` property by the `drivenMiles` parameter
//   * test after calling `drive` that miles is what you expect
// * `Car` has a `makes` static methods
//   * `makes` returns an array of valid car makes
//     (e.g. 'honda', 'ford', etc.)
// * BONUS: Update `Car` constructor so if make is not a valid
//   make (from your `makes` static method), it throws an error

class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.miles = 0;
    }
}

module.exports = Car;
