class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  price() {
    return 1000 * this.floors * this.bedrooms * this.bathrooms;
  }
}

module.exports = House;
