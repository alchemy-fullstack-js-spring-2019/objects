class Car {
  static makes() {
    return [
      'Ford',
      'Subaru',
      'Toyota',
      'Chevrolet',
      'Porshe'
    ];
  }
  constructor(make, model, year, color, miles) {
    if(Car.makes().indexOf(make) === -1) {
      throw 'Sorry but that is not a car make';
    }
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.miles = miles;
  }
  drive(drivenMiles) {
    return this.miles += drivenMiles;
  }
}

module.exports = Car;
