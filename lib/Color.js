class Color {
    constructor(){
        this.favorites = [];
    }

    addColor(colors){
        this.favorites.push(colors);
        return this.favorites;
    }

    hasColor(colors){
        return this.favorites.includes(colors);
    }
}

module.exports = {
    Color
};
