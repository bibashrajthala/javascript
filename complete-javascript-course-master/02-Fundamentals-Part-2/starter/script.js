'use strict';

//////////////////////////////////
////Strict mode in javascript

/*

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

//reserves words for future features in javascript
// const interface = 'audio';
// const private = 23;
// const if = 'bibash';

*/

/////////////////////////////////////////////////////

/*

//////////////////////
//// Functions

function logger() {
    console.log('my name is jonas');
}

logger();
logger();
logger();

//with parameters
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);

    const juice = `Juice with ${apples} appples and ${oranges} oranges.`;
    return juice; //exits function , returns value to function call
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(5, 3);
console.log(appleOrangeJuice);

//some built-in functions
console.log('bib'); //'bib' is used as argument for function console.log()
const num = Number('23');
console.log(num);

*/

//////////////////////////////////////////////////////

/*

//////////////////
//// function declarations and expressions

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
    //const age  = 2037 - birthyear; return age;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

*/

////////////////////////////////////////////

/*

////////////////////
//// arrow functions

//for single parameter and single line of code
const calcAge3 = birthyear => 2037 - birthyear;

console.log(calcAge3(1991));

const age3 = calcAge3(1991);
console.log(age3);

//for single parameter and multiple lines of code
const yearsUntilRetirement = birthyear => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

//for multiple parameters and multiple lines of code
const yearsUntilRetirement2 = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement2 = 65 - age;
    return `${firstName} retires in ${retirement2} years.`;
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));

//for multiple parameters and single line of code
const calcAge4 = (birthyear, todayYear) => todayYear - birthyear;

console.log(calcAge4(1991, 2022));

//for no parameters and single line of code
const calcAge5 = () => 2073 - 2053;

console.log(calcAge5());

//for no parameters and multiple line of code
const birthYear = 1991;
const firstName = 'bibash';
const yearsUntilRetirement3 = () => {
    const age = 2037 - birthYear;
    const retirement3 = 65 - age;
    return `${firstName} retires in ${retirement3} years.`;
}

console.log(yearsUntilRetirement3());

*/

////////////////////////////////////////////////

/*

////////////////////////
//// functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const appplePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${appplePieces} pieces of apple and ${orangePieces} pieces of orange. `;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

//////////////////////////////////////////////

/*

///////////////
// coding challenge #1 solution

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(2, 4, 3));

//for test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log('no team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(300, 100);

//for test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

*/

/////////////////////////////////////////////

/*

//////////////////
//// introduction to array

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//One way to create array (array literal)
const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

//Another way to create array(using'new' keyword and Array() function)
const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

//getting/using array elements (zero based indexing/positioning)
console.log(friends[0]);
console.log(friends[2]);

//length of array = number of elements in array
console.log(friends.length);
console.log(friends.length - 1);

// can change or mutate(add/remove) array elements even though array is declared using const
friends[2] = 'Jay'; //changing friends[2]
console.log(friends);

// but the whole array cant be changed
//freinds = ['Bob', 'Alice']; //error

//an array can contain value, variable , expression , another array in it
const firstName = 'Jonas';
const jonas = [firstName, 'Schedtmann', 2037 - 1991, friends];
console.log(jonas);

//exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3)

//storing answer in array
const ages = [age1, age2, age3];
console.log(ages);

//or  directly do:
const ages2 = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]; //function call in an array
console.log(ages2);

*/

////////////////////////////////////////////

/*

//////////////////
// basic array operations using methods

const friends = ['Michael', 'Steven', 'Peter'];

//push() method => add elements in array at the end of an array.
//friends.push('Jay');
const newLength = friends.push('Jay');
console.log(friends);

//push() and unshift() returns new lenght of array after adding element
console.log(newLength);

//unshift() method => add elements in array at the start of an array.
//friends.unshift('Jay');
friends.unshift('Bob');
console.log(friends);

////pop() method => removes elements in array at the end of an array.
//friends.pop();
const popped = friends.pop();  //no argument needed
console.log(friends);

//pop() and shift() returns removed element of array
console.log(popped);

//shift() method => removes elements in array at the start of an array.
friends.shift();
console.log(friends);


//indexOf() method => returns indes/position of element in array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));//not present in array => returns -1;

//includes() method => tells array is present or not but in boolean value ==> performs strict equality
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) console.log('you have steven as your freind');

*/

/////////////////////////////////////////////////

/*

///////////////////////
//// coding challenge #2 solution

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = bills + tips; //buggy //concatenates as string
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

*/

//////////////////////////////////////////////

/*

////////////////////////
//// introduction to objects

//array
const jonasArray = [
    'Jonas',
    'Schedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];
console.log(jonasArray);

//object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
};
console.log(jonas);

*/

///////////////////////////////////////////

/*

//////////////////////
///// dot and bracket notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
};

//using dot notation
console.log(jonas.lastName);

//using bracket notation
console.log(jonas['lastName']);

//with bracket notation only , operation/expression is possible
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
console.log(jonas[`last${nameKey}`]); //uding template literal also

//cant use expression using dot notation
// console.log(jonas.'last' + nameKey); //error

//use bracket notation when you dont know which property/key to access
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName , age, job, and friends');

console.log(interestedIn);
console.log(jonas.interestedIn); //undefined
console.log(jonas[interestedIn]); //teacher

if (jonas[interestedIn]) console.log(jonas[interestedIn]);
else console.log('wrong input! choose between firstName, lastName , age, job, and friends');

// adding properties to object using dot notation
jonas.location = 'Portugal';

// adding properties to object using bracket notation
jonas['twitter'] = '@jonasschmedtmann';

console.log(jonas);

// challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend name is ${jonas.friends[0]}.`);

*/

//////////////////////////////////////////////////////

/*

////////////////////////
//// object methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: false,
    calcAge: function () { //object method
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    //challenge
    getSummary: function () {
        this.sentence = `${this.firstName} is a ${this.calcAge()} years old ${this.job} , and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
        return this.sentence;
    }
};

console.log(jonas.calcAge(1991));// using dot notation
console.log(jonas['calcAge'](1991));// using bracket notation

console.log(jonas.calcAge(1991));
console.log(jonas.age);

console.log(jonas.getSummary());
console.log(jonas.sentence);

*/

/////////////////////////////////////////////////

/*

//////////////////////
//// coding challenge #3 solution

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
console.log(mark.calcBMI(), john.calcBMI());
console.log(mark.bmi, john.bmi)
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}

*/

/////////////////////////////////////////////

/*

////////////////////
// iteration: the for loop

// for loop keeps running while the condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition: ${rep}`);
}

*/

/////////////////////////////////////////////

/*

/////////////////////////////
//// looping array , breaking and continuing

const jonas = [
    'Jonas',
    'Schedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {

    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling an array
    // types[i] = typeof jonass[i];//method 1 => using assignment(=) operator
    types.push(typeof jonas[i]); //method 2 => using push() method
}
console.log(types);

//challenge to calculate age sing for loop
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//break and continue statement

//continue => exit current iteration and goto/continue to next iteration
console.log('-----only strings-----');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}


//break => completely exits/terminates the loop
console.log('------break with a number------');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

*/

//////////////////////////////////////////

/*

/////////////////////
///// looping backwards and loops in loops=> Nested loops

const jonas = [
    'Jonas',
    'Schedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

//looping forward : 0,1,2,3,...,5
//looping backward : 5,4,3,..., 1,0

//looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

//nesting loops => loops inside loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----starting exercise: ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: lifting weights repetition ${rep}`)
    }
}


*/

///////////////////////////////////////////

/*

////////////////////////
////// the while loop

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition: ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('loop is about to end...');
}

*/

///////////////////////////////////////////////

/*

/////////////////////
//// coding challenge #4 solution

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avg = sum / arr.length;
    return avg;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

*/












