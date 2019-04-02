class House{
    constructor(location, floors, bedrooms, bathrooms) {
        this.location = location;
        this.floors = floors;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }

    price() {
        return 100000 * (this.floors + 1);
    }
}

module.exports = House;
