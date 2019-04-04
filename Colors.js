class Colors {
  constructor() {
    this.favorites = [];
  }

  addColor(color) {
    this.favorites[this.favorites.length] = color;
  }

  hasColor(color) {
    const array = this.favorites;
    for(let i = 0; i < array.length; i++) {
      if(this.favorites[i] === color) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Colors;