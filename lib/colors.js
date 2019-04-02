class Colors {
    constructor(){
        this.favorites = [];
    }
    addColor(color){
        return this.favorites.push(color);
    }
    hasColor(color){
        if(this.favorites.includes(color)){
            return true;
        }
        else {
            return false;
        }
    }
    //simplified: return this.favorites.includes(color);
}

module.exports = { Colors };
