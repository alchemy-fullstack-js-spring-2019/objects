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
