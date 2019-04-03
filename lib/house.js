class House {
  constructor(location, floor, bedroom, bathroom) {
    this.location = location;
    this.floor = floor;
    this.bedroom = bedroom;
    this.bathroom = bathroom;
  }

  price() {
    return (this.floor +
      this.bedroom +
      this.bathroom) *
      100000;
  }

  static colors() {
    return [
      'red',
      'blue',
      'green'
    ];
  }
}

module.exports = House;
