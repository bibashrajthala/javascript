'use strict';

////////////////////////////////////////////////////////////////////////

/*

/////////////////////
//// Constructor functions and the 'new' operator

const Person = function (firstName, birthYear) {
  //   console.log(this);

  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   // NEVER Do it
  //   // never use instance methods in constructor function like this,even though it works => it violates DRY as all its instances/objects will have (copy of) this method
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const mitilda = new Person('Miltilda', 2017);
const jack = new Person('Jack', 1975);
console.log(mitilda, jack);

console.log(jonas instanceof Person);

const jay = 'Jay';
console.log(jay instanceof Person);

//////////////////////////////////////////////////////

//////////////////////
//// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();

console.log(jonas);

// same for mitilda and jack
mitilda.calcAge();

// check
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

// other way to check
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(mitilda));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(jonas);

// setting/defining properties on prototype just like methods
// NOT recommended to do it
Person.prototype.species = 'Homo sapiens';
console.log(jonas, mitilda);

// to check if its own property which is not inherited
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

/////////////////////////////////////////////////////////

///////////////////////
// protytypal inheritance/delegation -(theory)

/////////////////////////////////////////////////////////

////////////////////
// prototypal inheritance and protytype chaining on built-in objects(such as arrays and functions)

const arr = [3, 4, 5, 6, 7, 6, 6]; // [] === new Array() // ie constructor function

// prototype of array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

// prototype of prototype object
console.log(arr.__proto__.__proto__);

// Setting custom properties and methods on prototype of array
// Bad practice => NOt recommended to do it
// Custom method to filter only the unique non repeating elements of array on Array.prototype
Array.prototype.unique = function () {
  return [...new Set(arr)];
};
console.log(arr.unique());

// DOM elements are also objects so they also have prototype
const h1 = document.querySelector('h1');
console.log(h1); // shows the element
console.dir(h1); // shows actual element object

// protyotype of funcitons
console.dir(x => x + 1);

*/

////////////////////////////////////////////////////////////

/*

//////////////////////
// Coding Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}`);
};

const bmw = new Car('BMW', 110);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

*/

////////////////////////////////////////////////////////

/*

/////////////////////
// ES6 classes

// class expression
// const Car = class{........}

// class declaration => PREFFERED
class PersonCl {
  constructor(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

// Can also use prototype property to set methods on class
// Bad practice, Just use ES6 class syntax
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

const jessica = new PersonCl('Jessica', 1996);

console.log(jessica);

jessica.calcAge();
jessica.greet();

console.log(jessica.__proto__);
console.log(jessica.__proto__ === PersonCl.prototype);

// // Important points about ES6 classes
// 1. classes are not hoisted
// 2. classes are first class citizens just like functions ie we can pass and return classes
// 3. body of class are always executed in strict MediaStreamAudioDestinationNode.

*/

////////////////////////////////////////////////////

/*

///////////////////////
// Object.create()

// it is used to make an object prototype of other object.

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // can use it in ES6 classes as well to create instance properties
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // PersonProto is the prototype object of steven object

console.log(steven);

// setting properties in steven object
steven.name = 'Steven';
steven.birthYear = 2002;

console.log(steven);

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1997);
sarah.calcAge();

*/

/////////////////////////////////////////////////////

/*

////////////////
// Inheritance between classes : using "Constructor functions"

// constructor funciton of Parent class
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// constructor funciton of child class
const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;

  // or

  //   Person(firstName, birthYear); // Error as this -> undefined as we did not used 'new' keyword to call Person
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype); // making parent and child connection between Person and Student (its prototype)

// Cant do this as it creates wrong prototype chain
// Student.prototype = Person.prototype

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'computer science');
mike.introduce();

mike.calcAge();

// Bug
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike);
console.dir(Student.prototype.constructor);
// fixing bug
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

*/

//////////////////////////////////////////////////

/*

////////////////
// Inheritance between classes : using "ES6 classes"

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // overriding inherited method
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const martha = new StudentCl('Martha Jones', 2012);
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce(); // from child class
martha.calcAge(); // from parent class

console.log(martha);

*/

//////////////////////////////////////////////////

////////////////
// Inheritance between classes : using "Object.create()"

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'computer');
jay.introduce(); // inherited from parent
jay.calcAge(); // inherited from grandparent

console.log(jay);
