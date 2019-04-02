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

  static makes() {
    return ['Honda', 'Ford', 'Saab', 'Jeep'];
  }
}

module.exports = Car;
