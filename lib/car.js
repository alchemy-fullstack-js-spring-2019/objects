class Car {
  constructor(make, model, year, color, miles) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = miles;
    this.drivenMiles = 0;
  }
    
  drive(drivenMiles) {
    return this.drivenMiles += this.miles;
  }
}

module.exports = { Car };
