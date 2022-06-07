'use strict';

//////////////////////////////////////////////////////////

/*

/////////////////////////
//// default parameters

// without default parameters
const bookings = [];
const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');

// setting default parameters in traditional ES5 way
const bookings2 = [];
const createBooking2 = function (flightNum, numPassengers, price) {
  // traditional ES5 way tosetting default parameters
  numPassengers = numPassengers || 1;
  price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking2('LH123');

// setting default parameters in modern ES6+ way
const bookings3 = [];
const createBooking3 = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking3('LH123');

// passed arguments overrides the default values
createBooking3('LH123', 5, 900);

// skipping parameters can be done using undefined as argument passed to that parameters so that it will use default value set to it
createBooking3('LH123', undefined, 900);

// any expression can be used to set default values to parameters
const add = function (a = 1, b = 1 + 3 / 5) {
  console.log(a + b);
};
add();

// already defined parameters can be used to set default values of parameters after it
const bookings4 = [];
const createBooking4 = function (
  flightNum,
  numPassengers = 2,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking4('LH123');

// but parameters defined after the set parameter is not allowed to set default values
//error
const createBooking5 = function (
  flightNum,
  price = 199 * numPassengers,
  numPassengers = 2
) {
  console.log(flightNum, price, numPassengers);
};
createBooking5('ok');

*/

///////////////////////////////////////////////////////////

/*

////////////////////////
//// how passing arguments work for value/primitive vs reference/reference type

const flight = 'LH234'; // primtive value
const jonas = {
  //reference type/object
  name: 'Jonas Schmedtmann',
  passport: 24739379254,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // changing primtive value
  passenger.name = 'Mr. ' + passenger.name; // changing (a property of) reference type/object

  if (passenger.passport === 24739379254) {
    alert('Checked in');
  } else {
    alert('Wrong Passport!');
  }
};

// passing primitive(flight) and reference(jonas) to parameters of function
checkIn(flight, jonas);
console.log(flight); // primitive(flight) value is unchanged
console.log(jonas); // reference(jonas) value is changed

// checkIn(flight, jonas); is same as doing this:
const flightNum = flight;
const passenger = jonas;

// since change in one reference/object also cause change in its other copy and original ,we should be careful while manupulating objects in function
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

*/

////////////////////////////////////////////////////////

/*

///////////////////////////
//// first-class and higher-order functions

//first-class functions ==> functions are simply values and another type of object.

// higher-order functions:

// 1) functions that recieves another function
const greet = () => console.log('Hey Jonas');
// btnClose.addEventListener('click', greet);
// here, addEventListener() is higher-order function as it recieves another function greet and , greet() is called a  callback function as it was passed in , sand it will be called later by higher-order function addEventListener().

// 2) functions that returns  new function
function count() {
  let counter = 0;
  return function () {
    //returned function
    counter++;
  };
}
// count() is a higher-order function here.

*/

///////////////////////////////////////////////////////////

/*

//////////////////////////////
////// functions receiving a function i.e functions recieving a callback function

//function that converts string to a word removing all whitespaces
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

// function that converts first word of string to uppercase
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
// recieves fn= function() as input parameter
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
// here upperFirstWord passed as parameter is a callback function.

transformer('Javascript is the best!', oneWord);
// here oneWord passed as parameter is a callback function.

// Javascript uses callback all the time.
// examples:

// 1)
const high5 = function () {
  console.log('🤟');
};
document.body.addEventListener('click', high5);

*/

//////////////////////////////////////////////////////

/*

//////////////////////////
//// function returning another function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); //returned function
greeterHey('Jonas');

// same, in one line
greet('Hey')('Jonas');

// here,greet() is higher order function returning another function, and greeterHey() is returned function.

// challenge => same above code in arrow function
// arrow function returning a new arrow function

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Jonas');

*/

/////////////////////////////////////////////////////////

/*

////////////////////////
//// the call and apply methods and  the bind method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schedtmann');
lufthansa.book(635, 'Jonas Smith');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// doesnot work
// book(23, 'Sarah Williams'); // this -> undefined

// call() method
book.call(eurowings, 23, 'Sarah Williams'); // this -> eurowings
//same as
// lufthansa.book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper'); // this -> lufthansa
console.log(lufthansa);

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Coop');
console.log(swiss);

// apply() method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
//same as
// book.apply(swiss, [583, 'George Cooper']);
console.log(swiss);

// using call instead of apply
book.call(swiss, ...flightData);

///// the bind() method
const bookEW = book.bind(eurowings); // this -> eurowings // returns a new function where this -> eurowings ,and that returned function is assigned to bookEW
// bookEW() is basically returned function returned by bind() method
bookEW(23, 'steven williams');

const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

// booking eurowings for specific flight number 23
const bookEW23 = book.bind(eurowings, 23);
bookEW23('jonas sch');

// booking eurowings for specific flight number 23 by jonas only
const bookEW23Jonas = book.bind(eurowings, 23, 'Jonas');
bookEW23Jonas();

// example of bind
// with event listeners
lufthansa.planes = 300; // adding property in lufthansa object
lufthansa.buyplane = function () {
  // adding method in lufthansa object
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyplane(); // this -> lufthansa

// document.querySelector('.buy').addEventListener('click', lufthansa.buyplane);  // this -> <button class = "buy"></button>

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa)); // this -> lufthansa object

// example 2 of bind
// partial application
// calculate and add tax to your income
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// in nepal VAT is constant=13%
const addVAT = addTax.bind(null, 0.13); // this -> null
// technically same as doing this:
// const addVAT = value => value + value * 0.13;

console.log(addVAT(100));

// challenge
// do same thing above without using bind() method to create function returing function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.13);
console.log(addVAT2(100));
// or same:
console.log(addTaxRate(0.13)(100));

*/

//////////////////////////////////////////////////////////////////////

/*

//////////////////////////////////
//// coding challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0), //[0,0,0,0] initially

  // 1.1)
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n( Write option number.)`
      )
    );
    console.log(answer);

    // 1.2)
    // using short circuiting
    typeof answer === 'number' &&
      answer < poll.answers.length &&
      poll.answers[answer]++;
    // console.log(poll.answers);

    // or same:
    // using if else
    // if(answer === 'number' && answer < poll.answers.length){
    //   poll.answers[answer]++;
    // }

    // 4)
    this.displayResults(); // default // type = 'array'
    this.displayResults('string'); // type = 'string'
  },

  // 3)
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if ((type = 'string')) {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};

poll.registerNewAnswer();
// poll.registerNewAnswer();
// poll.registerNewAnswer();

// console.log(poll.answers);

// 2)
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer); //error // this -> <button".poll">
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS
// test datas: [1,5,3,9,6,1], [5,2,3]
poll.displayResults.call({ answers: [5, 2, 3] }); // this -> {answers:[5,2,3]}); // this.answers=[5,2,3] // type = 'array' as default value set
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // type = 'string'
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

*/

////////////////////////////////////////////////////////////////////////

/*

////////////////////////////////////////
///// Immediatly Invoked Funciton Expression ( IIFE )

// IIFE => immmediately invoked only once and never again!

// without using iife
const runOnce = function () {
  console.log('this may run again..');
};
runOnce(); // this can be called/invoked again and again...

// IIFE

// SyntaxError: Function statements require a function name
// function(){
//   console.log('this will never run again.')
// }

// now function value wrapped by () is a statement, but still function is not invoked
(function () {
  console.log('this will never run again.');
});

//IIFE => function is invoked
(function () {
  console.log('this will never run again.');
})();

// IIFE using arrow function
(() => console.log('this will never run again.'))();

// data privacy in IIFE
(function () {
  const isPrivate = 23;
})();
// console.log(isPrivate); // error:isPrivate is not defined // isPrivate not accessible outside IIFE

// data privacy using block scope
{
  const isPrivate = 23;
  var notPrivate = 24;
}
// console.log(isPrivate); // error:isPrivate is not defined // let and const variable not accessible outside block scope
console.log(notPrivate); // var variable is accessible outside block scope

*/

///////////////////////////////////////////////////////////////////

/*

/////////////////////////
//// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// observe or take a look at closure
console.dir(booker);

// More examples of closure

// example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// re-assigning f function
h();
f();
console.dir(f);

// example 2
// Timer

// setTimeout(function(){console.log('TIMER')},1000);

const boardPassengers = function (n, wait) {
  //n = number of passengers, wait = time for airline to take off

  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding with ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will starting boarding in ${wait} seconds.`);
};

const perGroup = 1000;
boardPassengers(180, 3);

*/

/////////////////////////////////////////////////////////////////

/*

//////////////////////////
//// coding challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

*/
