const CarCreate = require('../lib/car');
let car1 = null;

beforeEach(() => {
  car1 = new CarCreate('ford', 'ranger', 2006, 'black', 120000);
});

describe('car class function', () => {
  it('car has make', () => {
    expect(car1.make).toEqual('ford');
  });
  it('car has make', () => {
    expect(car1.model).toEqual('ranger');
  });
  it('car has year', () => {
    expect(car1.year).toEqual(2006);
  });
  it('car has color', () => {
    expect(car1.color).toEqual('black');
  });
  it('car has miles', () => {
    expect(car1.miles).toEqual(120000);
  });

  it('drive method', () => {
    expect(car1.drive(10000)).toEqual(10000);
  });

  it('makes static method', () => {
    expect(CarCreate.makes()).toEqual(
      [
        'ford',
        'chevy',
        'dodge'
      ]
    );
  });

});
