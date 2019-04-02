module.exports = class Car {
  constructor(make, model, year, color) {
    if(!Car.makes().includes(make)) {
      throw 'Please provide a valid car make';
    }
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }

  drive(driven) {
    this.miles += driven;
  }
  static makes() {
    return [
      'Honda',
      'Nissan',
      'Toyota'
    ];
  }
};
