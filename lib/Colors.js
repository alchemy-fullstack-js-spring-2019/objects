// * Create a `Colors` class
// * colors has a `favorites` property
//   * initialize `favorites` as an empty array
// * `addColor` method takes a `color` parameter
//   * `addColor` pushes `color` to the array of `favorites`
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
}

module.exports = Colors;
