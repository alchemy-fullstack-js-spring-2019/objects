class Car {
  constructor(make, model, year, color) {

    const allMakes = Car.makes();
    // allMakes.find(make) ? this.make = make : throw "This is not a valid car manufacturer";
    if(allMakes.includes(make)) {
      this.make = make;
    } else {
      throw 'This is not a valid car manufacturer';
    }
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }
  drive(drivenMiles) {
    this.miles += drivenMiles;
  }
  static makes() {
    return ['Fjord', 'Hundeh', 'Toyboggan', 'Evade', 'Lamb-guini'];
  }

}

module.exports = {
  Car
};
