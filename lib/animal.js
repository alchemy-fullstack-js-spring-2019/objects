function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
  this.speak = function() {  //speak method attached to functions prototype
    return `Hi! I am ${ this.name } the ${ this.species }.`;
  };
}

function AnimalConstructorAlt(name, species) {
  this.name = name;
  this.species = species;  
}

AnimalConstructorAlt.prototype.speak = function() {
  return `Hi! I am ${ this.name } the ${ this.species }.`;
};

function AnimalFactory(name, species) {
  return {
    name,
    species,
    speak() {
      return `Hi! I am ${ this.name } the ${ this.species }.`;
    }
  };
}

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return `Hi! I am ${ this.name } the ${ this.species }.`;
  }
}

module.exports = {
  AnimalConstructor,
  AnimalConstructorAlt,
  AnimalFactory,
  AnimalClass
};

//************************************************************** 
// Developer Notes:
//
// example
// function Course(title, teacher, level, published, views) {
// 	this.title = title,
// 	this.teacher = teacher,
// 	this.level = level,
// 	this.published = published,
// 	this.views = views,
// 	this.updateViews = function() {
// 		return ++this.views;
// 	};
// }
//
// var courses = [
// 	new Course("JSClass2", "Joe Teacher", 1, true, 0);
// 	new Course("ECMA6", "Some Teacher", 1, true, 123457);
// ];

// console.log(courses);
// console.log(courses[0].teacher);
// console.log(courses[1].updateViews());
//********************************************************
