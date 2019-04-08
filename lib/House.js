class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  price() {
    let result = this.bedrooms * 150000;
    return `This ${ this.floors } floor, ${ this.bedrooms } bedroom, ${ this.bathrooms } bath house in ${ this.location } sells for $` + result;
  }
}

module.exports = { House };
