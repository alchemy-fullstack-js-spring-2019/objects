class Colors {
  constructor() {
    this.favorites = [];
  }

  addColor(color) {
    this.favorites.push(color);
    return this.favorites;
  }

  hasColor(color) {
    if(this.favorites.includes(color)) {
      return true;
    }
    else
      return false;
  }
}

module.exports = Colors;
