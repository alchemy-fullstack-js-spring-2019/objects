class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }
  drive(drivenMiles) {
    return this.miles += drivenMiles;
  }

}

module.exports = { Car };
