// * BONUS: Update `Car` constructor so if make is not a valid
//   make (from your `makes` static method), it throws an error

class Car {
    constructor(make, model, year, color) {
        if(!Car.makes().includes(make)) throw 'invalid make';
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.miles = 0;
    }

    drive(drivenMiles) {
        this.miles += drivenMiles;
    }

    static makes() {
        return ['Honda', 'Ford', 'Toyota', 'Tesla', 'Subaru', 'Chevrolet'];
    }
}

module.exports = Car;
