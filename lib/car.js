class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }

  drive(miles) {
    this.miles += miles;
  }

  static makes() {
    return [
      'honda',
      'toyota',
      'ford',
      'dodge'
    ];
  }
}


module.exports = Car;
