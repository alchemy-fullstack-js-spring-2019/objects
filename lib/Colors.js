class Colors{
    constructor() {
        this.favorites = [];
    }

    addColor(color) {
        this.favorites.push(color);
    }

    hasColor(color) {
        let found = false;
        this.favorites.find(function(element) {
            found = element === color;
        });
        return found;
    }
}

module.exports = Colors;
