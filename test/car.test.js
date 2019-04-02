const { Car } = require('../lib/car.js');

describe('car tests', ()=> {
    const myCar = new Car('honda', 'odyssey', 2013, 'silver');
    describe('parameters are passed to the constructor', ()=> {
        it('will add a make property', ()=> {
            expect(myCar.make).toEqual('honda');
        });

        it('will add a model property', ()=> {
            expect(myCar.model).toEqual('odyssey');
        });

        it('will add a year property', ()=> {
            expect(myCar.year).toEqual(2013);
        });

        it('will add a color property', ()=> {
            expect(myCar.color).toEqual('silver');
        });
    });
    describe('testing drive method', ()=> {
        it('miles will start at 0', ()=> {
            expect(myCar.miles).toEqual(0);
        });

        it('drive will increment the miles property', ()=> {
            const totalMiles = myCar.drive(3000);
            expect(totalMiles).toEqual(3000);
        });
    });
});
