
function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
  this.speak = function() {  //speak method attached to functions prototype
    return `Hi! I am ${ this.name } the ${ this.species }.`;
  };
}

module.exports = {
  AnimalConstructor,
};

// example:
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

// var courses = [
// 	new Course("JSClass2", "Joe Teacher", 1, true, 0);
// 	new Course("ECMA6", "Some Teacher", 1, true, 123457);
// ];

// console.log(courses);
// console.log(courses[0].teacher);
// console.log(courses[1].updateViews());
//********************************************************

// 1. Create an `AnimalFactory` factory function
//   * The factory function return an object
//     representation of an animal and take two
//     parameters: name and species
//   * A `speak` method should be included in the
//     returned object
//   * `speak` should return a string
//
// 1. Create an `AnimalClass` class
//   * The class's constructor should take two
//     parameters: name and species
//   * A `speak` method should be defined
//   * `speak` should return a string
