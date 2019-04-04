class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location,
    this.floors = floors,
    this.bedrooms = bedrooms, 
    this.bathrooms = bathrooms;
  }
  price() {
    return `This lovely ${this.location} home costs 45.30.`;
  }
}

module.exports = House;
