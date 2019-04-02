class Car {
  constructor(make, model, year, color, drivenMiles) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
    this.drivenMiles = drivenMiles;
  }
    
  drive(drivenMiles) {
    return this.miles += drivenMiles;
  }
}

module.exports = { Car };
