class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive(drivenMiles) {
    let miles = 0;
    return miles += drivenMiles;
  }

  static makes() {
    return ['Ford', 'Toyota', 'Honda'];
  }
}

module.exports = Car;
