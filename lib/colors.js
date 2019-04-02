class Colors {
  constructor() {
    this.favorites = [];
  }
  addColor(color) {
    this.favorites.push(color);
    return this.favorites;
  }
  hasColor(color) {
    return this.favorites.includes(color); 
  }
}

module.exports = { Colors };
