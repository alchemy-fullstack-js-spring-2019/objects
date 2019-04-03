

// class CarClass {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;  
//   }
// }
module.exports = class CarClass {
  constructor(color, make, model) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.miles = 0;
  }
  drive(miles) {
    this.miles += miles;
  }
  static makes() {
    return [
      'honda',
      'toyota',
      'dodge',
      'ford'
    ];
  }
};
