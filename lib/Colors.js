module.exports = class Colors {
  constructor() {
    this.favorite = [];
  }
  addColor(color) {
    this.favorite.push(color);
  }
  hasColor(color) {
    return this.favorite.includes(color);
  }
};
