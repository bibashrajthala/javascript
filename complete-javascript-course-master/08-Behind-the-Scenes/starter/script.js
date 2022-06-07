'use strict';
// 'use strict';

////////////////////////////////////////////////////////////////////////////////

/*

/////////////////////////////////
//Scoping and scope chain in practice

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  //   console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthyear}. `;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;

      // creating a new variable with the same name as outer scope's variable
      const firstName = 'Steven';

      // reassigning outer scope's variable
      output = 'New Output!!';
      // const output = 'New Output again!!';

      const str = `You are a millenial , ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(str); // error
    console.log(output);
    // console.log(add(2, 3)); //error
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // error
// printAge(); // error

*/

//////////////////////////////////////////////////////////////

/*

//////////////////////////
//// Hoisting and TDZ in  practice

///  Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

/// Hoisting with functions with let/const
console.log(addDec(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

//function declaration
function addDec(a, b) {
  return a + b;
}

//function expression
const addExpr = function (a, b) {
  return a + b;
};

// arrow function
let addArrow = (a, b) => a + b;

/// Hoisting with functions with var
console.log(addExprVar); //undefined
console.log(addArrowVar); //undefined
console.log(addExprVar(2, 3)); //undefined() ==> is not a function
console.log(addArrowVar(2, 3)); //undefined() ==> is not a function

//function expression
var addExprVar = function (a, b) {
  return a + b;
};

// arrow function
var addArrowVar = (a, b) => a + b;



// example : bug due to var
console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted');
}

// var creates window object
var x = 1;
let y = 2;
const z = 3;
//check
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// hoisting of variable used in function
function aggy() {
  console.log(firstName);
  return 10;
}

// aggy();  //error
const firstName = 'bibash';
aggy();

*/

///////////////////////////////////////////////////////////

/*

//////////////////////
//// this keyword in practice

// in global scope //ouside any function or object ==> this -> window
console.log(this);

// simple functon call(func declaration and expression) in strict  and without strict mode
const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAge(1991);

// arrow function
const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAgeArrow(1991); // outer object here, window is pointed ,,this -> window

// arrow inside a scope with simple function call
function arrowInside() {
  const a = 1;

  const arrowOfInside = a => {
    console.log(this);
  };
  arrowOfInside();
}
arrowInside();

// Method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2011,
};

// burrowing method
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); //this -> undefined ,as it is simple call

//Event listeners will learn later


*/

/////////////////////////////////////////////////////////

/*

///////////////////////
//// regular function vs arrow function ('this' keyword)

// var firstName = 'matilda';

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

jonas.calcAge();
jonas.greet();

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // const isMillenial = function () {
    //   console.log(this);  // this -> undefined //due to simple function call
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();  //simple function call

    // // solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self); // this -> jonas object
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // solution 2 : using arrow function
    const isMillenial = () => {
      console.log(this); // this -> undefined //due to simple function call
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
jonas.calcAge();

///// argument object(array) and 'arguments' keyword

// regular function
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 4, 6);

// arrow function
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);

*/

////////////////////////////////////////////////

/*

///////////////////////////
//// primitive vs reference/objects

// primitives
let firstName = 'williams';
let lastName = firstName;
lastName = 'davis';
console.log(firstName);
console.log(lastName);

//objects(reference types)
const jessica = {
  firstName: 'jessica',
  lastName: 'wllians',
  age: 27,
};
const marriedJessica = jessica;
// let marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log(jessica);
console.log(marriedJessica);

// marriedJessica = {}; //error for const


//copyping objects with Object.assign()
const jessica2 = {
  family: ['a', 'b'],
  age: 27,
};
const jessicaCopy = Object.assign({} + jessica2);
jessicaCopy.age = 30;

jessicaCopy.family.push('c');
jessicaCopy.family.push('d');
console.log(jessica2);
console.log(jessicaCopy);

*/
