module.exports = class Colors {
  constructor() {
    this.favorites = [];
  }
  addColor(...color) {
    this.favorites = [...this.favorites, ...color];
  }
  hasColor(color) {
    return this.favorites.includes(color);
  }
};
