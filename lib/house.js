class House {
    constructor(location, floors, bedrooms, bathrooms) {
        this.location = location;
        this.floors = floors;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }
    housePrice() {
        return this.bathrooms * this.bedrooms * 10000;
    }
}





module.exports = { House };
