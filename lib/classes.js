class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
  getPrice(){
    return '$' + (this.floors * 1000000).toLocaleString();
  }
}

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
    if(Car.makes().every(n => n !== this.make)){
      throw 'ERROR';
    }
  }
  drive(drivenMiles) {
    this.miles += drivenMiles;
    return this.miles;
  }
  static makes() {
    return ['Honda', 'Subaru', 'Toyota', 'Mitsubishi', 'Fiat', 'Nissan'];
  }
}

class Color {
  constructor() {
    this.favorites = [];
  }
  addColor(color) {
    this.favorites.push(color);
  }
  hasColor(color) {
    return ((this.favorites).includes(color));
  }
}

module.exports = { House, Car, Color };
