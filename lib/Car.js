// Note: here, miles is not listed as a param in the constructor

module.exports = class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }
  drive(miles) {
    this.miles = miles + 100;
    return this.miles;
  }
};
