class ColorCreate {
  constructor() {
    this.favorites = [];
  }

  addFav(color) {
    this.favorites.push(color);
    return this.favorites;
  }

  hasColor(color) {
    return this.favorites.includes(color) ? true : false;
  }

}

module.exports = ColorCreate;
