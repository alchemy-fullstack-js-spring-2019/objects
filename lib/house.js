class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
  
  price() {
    const price = (this.location * 100000) + (this.bedrooms * 10000) + (this.bathrooms * 5000);
    return price;
  }
}

module.exports = { House };
