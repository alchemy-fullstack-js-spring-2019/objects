const {
    AnimalConstructor,
    AnimalFactory,
    AnimalClass
} = require('../lib/animal');

describe('animal tests', ()=> {
    describe('animal constructor test', ()=> {
        it('will add name and species property', ()=> {
            const zebra = new AnimalConstructor('stripes', 'zebra');
            expect(zebra).toEqual({ name: 'stripes', species: 'zebra' });
        });
        it('animal will speak', ()=> {
            const zebra = new AnimalConstructor('stripes', 'zebra');
            expect(zebra.speak()).toEqual('I am a zebra named stripes!');
        });
    });

    describe('animal factory test', ()=> {
        it('will add name property', ()=> {
            const zebra = AnimalFactory('stripes', 'zebra');
            expect(zebra.name).toEqual('stripes');
        });
        it('will add species property', ()=> {
            const zebra = AnimalFactory('stripes', 'zebra');
            expect(zebra.species).toEqual('zebra');
        });
        it('and will speak', ()=> {
            const zebra = AnimalFactory('stripes', 'zebra');
            expect(zebra.speak()).toEqual('I am a zebra named stripes!');
        });
    });

    describe('animal class test', ()=> {
        it('will add name property', ()=> {
            const zebra = new AnimalClass('stripes', 'zebra');
            expect(zebra.name).toEqual('stripes');
        });
        it('and the species', ()=> {
            const zebra = new AnimalClass('stripes', 'zebra');
            expect(zebra.species).toEqual('zebra');
        });
        it('and it will speak too', ()=> {
            const zebra = new AnimalClass('stripes', 'zebra');
            expect(zebra.speak()).toEqual('I am a zebra named stripes!');
        });
    });
});
