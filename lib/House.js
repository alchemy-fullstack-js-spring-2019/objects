
class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    // this.price = function() {
    //   this.makePrice = this.bedrooms * 75000;
    //   return 'This { floors } floor, { bedrooms } bedroom, { bathrooms } bath house in { location } sells for $ {this.makePrice}';
    // }; (alternate method)
  }
  price() {
    this.makePrice = this.bedrooms * 75000;
    return 'This { floors } floor, { bedrooms } bedroom, { bathrooms } bath house in { location } sells for $ {this.price}';
  }
}

// need to hoist with class ClassName {}.

module.exports = { House };
