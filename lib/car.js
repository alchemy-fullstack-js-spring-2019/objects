class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }

  drive(miles) {
    return this.miles += miles;
  }

  static makes() {
    return ['Ford', 'Toyota', 'Honda'];
  }
}

module.exports = Car;
