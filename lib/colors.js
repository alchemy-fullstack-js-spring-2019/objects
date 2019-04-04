class Colors {
  constructor(favorites) {
    this.favorites = [favorites];
  }
  addColor(color) {
    this.favorites.push(color);
  }
  hasColor(color) {
    if(this.favorites.indexOf(color) !== -1) {
      return true;
    }
    return false;
  }

}

module.exports = Colors;
