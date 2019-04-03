class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
  price() {
    const housePrice = 42000 + (this.floors * 4200) + (this.bedrooms * 420) + (this.bathrooms * 42);
    return `$${housePrice}`;
  }

}

module.exports = {
  House
};
