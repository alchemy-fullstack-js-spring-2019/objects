class Car {
  constructor(make, model, year, color, miles) {
    if(!Car.makes().includes(make)) {
      throw 'Not a valid Make';
    }
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = miles || 0;
  }
  drive(milesDriven) {
    this.miles += milesDriven;
  }

  static makes() {
    return [
      'Chevrolet', 
      'Cadillac', 
      'Ford'
    ];
  }
}

module.exports = Car;
