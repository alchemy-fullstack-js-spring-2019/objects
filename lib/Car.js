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

    drive(drivenMiles) {
        this.miles += drivenMiles;
    }

    makes() {
        return ['Honda', 'Ford', 'Toyota', 'Tesla', 'Subaru', 'Chevrolet'];
    }
}

module.exports = Car;
