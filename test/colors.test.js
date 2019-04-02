const { Colors } = require('../lib/colors');

describe('color tests', ()=> {
    let myColors = null;
    beforeEach(() => { //runs this code before each test is run
        myColors = new Colors();
    });
    it('colors has a favorites property that is empty', ()=> {
        expect(myColors.favorites).toEqual([]);
    });
    it('if addColor is called it adds a color to the favorites', ()=> {
        expect(myColors.addColor('yellow')).toEqual(['yellow']);
        //could also use ToContainEqual('yellow');
    });
    it('if color is in favorites return true', ()=> {
        myColors.addColor('yellow');
        expect(myColors.hasColor('yellow')).toBeTruthy();
    });
    it('if color is not in favorites return false', ()=> {
        myColors.addColor('red');
        expect(myColors.hasColor('yellow')).toBeFalsy();
    });
});
