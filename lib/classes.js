class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.price = (floors * 1000000);
  }
  getPrice(){
    return (`$${this.price}`);
  }
}

module.exports = { House };
