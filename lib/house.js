class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  price() {
    return (this.floors + this.bedrooms + this.bedrooms + this.bathrooms) * 10000;
  }
}

module.exports = House;
