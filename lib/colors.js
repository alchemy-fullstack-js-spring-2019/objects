class Colors {
  constructor() {
    this.favorites = [];
  }

  addColor(color) {
    return this.favorites.push(color);
  }
}

module.exports = Colors;
