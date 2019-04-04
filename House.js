class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  price() {
    return this.floors * 100000 + this.bedrooms * 10000 + this.bathrooms * 5000;
  }
}

module.exports = House;
