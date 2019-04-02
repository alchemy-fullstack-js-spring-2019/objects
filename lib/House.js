// * create a `House` class in `House.js` and `House.test.js`
// * `House` has location, floors, bedrooms, bathrooms
//   * test that a new `House` has the expected
//     location, floors, bedrooms, bathrooms properties
// * `House` has a `price` method
//   * test that `price` returns the expected price
//   * calculate the `House` price (this is a fake price. Make it up)

class House {
    constructor(location, floors, bedrooms, bathrooms) {
        this.location = location;
        this.floors = floors;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }

    price() {
        return this.floors * 1000 + this.bedrooms * 2000 + this.bathrooms * 250;
    }
}

module.exports = House;
