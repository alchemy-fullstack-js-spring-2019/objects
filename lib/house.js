class HouseCreate {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  price() {
    const price = this.floors * 10000 + this.bedrooms * 10000 + this.bathrooms * 10000;
    return price;
  }
}
module.exports = {
  HouseCreate
};
