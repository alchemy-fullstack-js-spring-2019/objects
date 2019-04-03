class House {
    constructor(location, floors, bedrooms, bathrooms, perFootPrice, squareFeet) {
        this.location = location;
        this.floors = floors;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.perFootPrice = perFootPrice;
        this.squareFeet = squareFeet;

    }
    price() {
        return this.squareFeet * this.perFootPrice;
    }
}

module.exports = {
    House
};
