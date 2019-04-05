class HouseClass {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  makePrice() {
    return  100000 * (this.bedrooms * this.bathrooms);
  }
}

module.exports = { HouseClass };
