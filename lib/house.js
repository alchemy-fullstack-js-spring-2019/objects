class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
  price() {
    const oneFloor = 200;
    const oneBedroom = 200;
    const oneBathroom = 200;
    const totalPrice = (oneFloor * this.floors) + (oneBedroom * this.bedrooms) + (oneBathroom * this.bathrooms);
    return `Price per month is: ${totalPrice}`;
  }
}


module.exports = { House };
