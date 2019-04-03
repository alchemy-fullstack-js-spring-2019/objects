class Car {
  constructor(make, model, year, color, miles) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }
}

// drive(miles) {
//   this.miles += miles;
// }

module.exports = Car;
