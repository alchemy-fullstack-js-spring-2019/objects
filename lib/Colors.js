
// * `hasColor` method takes a `color` parameter
//   * `hasColor` returns true if `favorites` `includes` `color`
//   * `hasColor` returns false if `favorites` does not `includes` `color`

class Colors {
    constructor() {
        this.favorites = [];
    }

    addColor(color) {
        this.favorites.push(color);
    }

    hasColor(color) {
        if(this.favorites.includes(color)) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Colors;
