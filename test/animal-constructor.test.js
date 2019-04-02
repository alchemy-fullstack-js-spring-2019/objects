const animalConstructor = require('../lib/animal-constructor');

describe('create animal constructor', () => {
    it('takes name and species', () => {
        const result = animalConstructor(bob, tiger);
        expect(result).toBe('bob', 'tiger');
    });
});

