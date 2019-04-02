class Car {
  constructor(make, model, year, color, miles) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.miles = miles;
  }
  drive(drivenMiles) {
    return this.miles += drivenMiles;
  }
  static makes() {
    return [
      'Ford',
      'Subaru',
      'Toyota',
      'Chevrolet',
      'Porshe'
    ];
  }
}

module.exports = Car;
