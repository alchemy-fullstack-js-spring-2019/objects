class CarCreate {
  constructor(make, model, year, color, miles) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = miles;
    this.drivenMiles = 0;
  }

  drive(milesDriven) {
    return this.drivenMiles += milesDriven;
  }

  static makes() {
    return [
      'ford',
      'chevy',
      'dodge'
    ];
  }
}

module.exports = CarCreate;
