class Car {
  constructor(make, model, year, color) {
    if(!Car.makes().includes(make)) throw 'Invalid Make';

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
      'Honda',
      'toyota',
      'ford',
      'dodge'
    ];
  }
}


module.exports = Car;
