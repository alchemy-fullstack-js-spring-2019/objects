class Car {
  constructor(make, model, year, color) {
    if(!Car.makes().includes(make)) {
      throw `Error: ${make} is not a valid make`;
    } else {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.miles = 0;
    }
  }

  drive(drivenMiles) {
    this.miles += drivenMiles;
  }

  static makes() {
    return ['Honda', 'Ford', 'Saab', 'Jeep'];
  }
}

module.exports = Car;
