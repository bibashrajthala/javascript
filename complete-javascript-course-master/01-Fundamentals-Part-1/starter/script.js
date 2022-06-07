/*

//////////////////
//// linking javascript file and logging to console

let javascript = 'amazing';
if (javascript === 'amazing') alert("javascript is fun");

console.log(40 + 8 - 10 + 23);

*/

/////////////////////////////////////////////////////////

/*

//////////////////////////
///// Values and Variables

// Values
console.log("Jonas");
console.log("3");
console.log("40 + 8 - 10");

// Variables
let firstName = 'Jonas';

console.log(firstName);
console.log(firstName);
console.log(firstName);

firstName = 'Mina';

console.log(firstName);
console.log(firstName);
console.log(firstName);

*/

///////////////////////////////////////////////////////

/*

///////////////////
//Conventions and Rules in naming variables

//Camelcase ==> Most used / best practice ==> legal and use it
let firstName = "Jonas";
let bmiIndexOfJonas = 3.33;
let roman10 = 'X';

//other way ==> legal but can use it as well
let last_name = "Karki";
let roman_10 = 'X';

//Variable name shouldnot start with number
// //error
// let 3years = 3;
// console.log(3years);
//Use this instead
let threeYears = 3;
console.log(threeYears);

//Dont use special symbols other than letters,numbers,underscore_,dollar$
// let jonas&matilda = "JM" //Error
//use this instead
let jonas_matilda = "JM";

//Avoid using reserved keywords
// let new = "no"; //error
let _new = "no";

//Shouldnot start with uppercase
let Person = "jon"; // legal but avoid using like this
let person = "jon";

//variables with all characters in uppercase are reserved for constants
let PI = 3.1415;
let pi = 3.1415; //legal but dont use it

//make varaiables descriptive
let job1 = "teacher";//legal but try to make it descriptive
//use this instead
let myFirstJob = "teacher";

*/

///////////////////////////////////////////////////

/*

///////////////
// Datatypes

//7 primitive dataypes and 1 object type
let age = 23; //1.number
let firstName = "jane"; //2.string
let fullAge = true; //3.boolean
let children; //4.undefined
//5. null , 6. synbol , 7. BigInt

//boolean
true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);


//typeof
console.log(typeof true); //typeof gives  datatype of value
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

//dynamic typing
javascriptIsFun = 'Yes!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

//null
console.log(typeof null);

*/

///////////////////////////////////////////////////////////

/*

///////////////////////
// let , const and var

//let ==> allows to change value
let age = 30;
age = 31;

//can declare undefined varaibles
let year;
year = 1991;


//const ==> doesnot allow to change value assigned to variable
const birthYear = 1999;
// birthYear = 1998; //error

//cannot define undefined variables
// const job; //error

//var ==> very old way to define variables ==> ignore it completely

// neither let, nor const, nor var ==> legal,works but never use it
lastName = "Rajthala";
console.log(lastName);

*/

/////////////////////////////////////////////////////////

/*

///////////////////////
// basic operators

//1.mathematical  / numerical operators
// const ageJonas = 2037 - 1991;
// console.log(ageJonas);

// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

//concatenation of string using '+' operator
const firstName = "Jonas";
const lastName = "Schedtmann";
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);//for space in between

//2.typeof operator
const age = 23;
const boolValue = true;
console.log(age, typeof age, boolValue, typeof boolValue);

//3.assignment operator(=,+=,-=,/=,*=,++,--)
const x = 10;
let y = 10 + 5;

console.log(x, y);

y += 10; //y = y + 10;
console.log(y);

y *= 4; //y = y * 4;
console.log(y);

y++; //y = y + 1;
console.log(y);

y--; //y = y - 1;
console.log(y);

//4. comparison operators(>,<,<=,>=)==> produces boolean value
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageSarah <= 18);

const checkAge = ageSarah <= 18;
console.log(checkAge);

console.log(now - 1991 > now - 2018);

*/

///////////////////////////////////////////////////

/*

//////////////////
// operator precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018
console.log(now - 1991 > now - 2018);//'-' has higher precedence than that of '>'
console.log(25 - 8 + 7); //left to right execution

//right to left execution
let x, y;
x = y = 10;
console.log(x, y);

// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

///////////////////////////////////////////////////////////


/*
////////////////////
// Coding challenge #1 solution

// ////For test data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

////for test data 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

//for BMI of Mark
const bodyMassIndexOfMark = massMark / heightMark ** 2; //BMI = mass / (height * height)

//for BMI of John
const bodyMassIndexOfJohn = massJohn / heightJohn ** 2; //BMI = mass / (height * height)

//Comparison
const markHigherBMI = bodyMassIndexOfMark > bodyMassIndexOfJohn;

console.log(bodyMassIndexOfMark, bodyMassIndexOfJohn, markHigherBMI);

*/

////////////////////////////////////////////////////////////

/*

//////////////////////
// strings and template literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

//concatenation without template literal, using '+' operator
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

//concatenation using template literal
const newJonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(newJonas);

//creating new line without using template literal
console.log("string with \n\multiple \n\lines");

//creating new line using template literal
console.log(`string with
multiple
lines`);

*/

///////////////////////////////////////////////////////////

/*

////////////////////////////
// taking decisions: if else statements

// const age = 19;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log('Sarah can start driving with liscense 🚗');
// }

//better way
const age = 10;
if (age >= 18) {
    console.log('Sarah can start driving with liscense 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`She is too young.wait for ${yearsLeft} years.`);
}

//variable defined inside if or else block cant be used outside it
// //gives error
// const birthYear = 1991;
// if (birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }
// console.log(century);

//do like this
const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//can write single line of  code without curly braces
const aged = 18;
if (aged >= 18) console.log("he is legally adult");
else console.log('still not adult');

*/

/////////////////////////////////////////////////////


/*

////////////////////
// Coding challenge #2 solution

////For test data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// ////for test data 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

//for BMI of Mark
const bodyMassIndexOfMark = massMark / heightMark ** 2; //BMI = mass / (height * height)

//for BMI of John
const bodyMassIndexOfJohn = massJohn / (heightJohn * heightJohn); //BMI = mass / (height * height)

if (bodyMassIndexOfMark > bodyMassIndexOfJohn) {
    console.log(`Mark's BMI (${bodyMassIndexOfMark}) is higher than John's BMI (${bodyMassIndexOfJohn})!`);
} else {
    console.log(`John's BMI (${bodyMassIndexOfJohn}) is higher than  Mark's BMI (${bodyMassIndexOfMark})!`);
}

*/

////////////////////////////////////////////////////////////

/*

////////////////////
// type conversion and type coercion

// type conversion

//conversion to number
const inputYear = '1991'; //string
console.log(Number(inputYear), inputYear);

console.log(Number("jonas"));

console.log(typeof NaN);

console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

//conversion to string
console.log(String(23), 23);

//Conversion to booean ==> later

// type coercion
console.log('i am 23 years old');
console.log('i am ' + 23 + ' years old');
console.log('i am ' + '23' + ' years old');

console.log('10' + '10' - 3);
console.log(10 - '3' - '4' + '5');

let n = '1' + 1; //'11'
n = n - 1; //'11' - 1 = 10
console.log(n);

*/

//////////////////////////////////////////////////////

/*

////////////////////
// truthy and falsy values

// falsy values = undefined , NaN , null , 0 ,'' , false
// truthy values = everything else

//type conversion to boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean(23));
console.log(Boolean({}));

//type c{oercion to boolean
if (10 > 3) {//true
    console.log("result is correct");
} else {//false
    console.log("result is incorrect");
}

const money = 0;
if (money) { //false as 0 is falsy value
    console.log("don't spend it");
} else {
    console.log("You are broke");
}

const num = 10;
if (num) { //true as 10 is truthy value
    console.log(true);
} else {
    console.log(false);
}

const height = undefined;
if (height) {//false as height is undefined and undefined is falsy value
    console.log("height is defined");
} else {
    console.log("height is undefined");
}

*/

///////////////////////////////////////////////////////

/*

////////////////////
// equality operators(== vs ===)
//different(not equal) operators(!= vs !==)

// equality operators(== vs ===)
const age = '18';
if (age == 18) {
    console.log("loose equality operator is used");
}
if (age === 18) {
    console.log("strict equality operator is used for first time");
}
if (age === '18') {
    console.log("strict equality operator is used for second time");
}

// const favourite = prompt("what's your favourite snumber?");
const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite, typeof favourite);

if (favourite == 23) console.log("loose");
if (favourite === 23) console.log("strict");

//different(not equal) operators(!= vs !==)
const num = 20;
if (num !== 10) console.log("different1");
if (num !== '20') console.log("different2");
if (num !== 20) console.log("different3");

*/

///////////////////////////////////////////////////////

/*

////////////////
//boolen logic and logical operators

const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
    console.log("Sarah should drive");
} else {
    console.log("someone else should drive");
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);
console.log(hasDriverLicense && hasGoodVision && !isTired);
if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Jonas should drive");
} else {
    console.log("someone else should drive");
}

*/

//////////////////////////////////////////////////////////

/*

///////////////
//Coding Challenge #3 solution

// //For test data 1
// const data1Dolphin = 96;
// const data2Dolphin = 108;
// const data3Dolphin = 89;
// const data1Koala = 88;
// const data2Koala = 91;
// const data3Koala = 110;

//For test data 2
const data1Dolphin = 97;
const data2Dolphin = 112;
const data3Dolphin = 101;
const data1Koala = 109;
const data2Koala = 95;
const data3Koala = 123;

// //For test data 3
// const data1Dolphin = 97;
// const data2Dolphin = 112;
// const data3Dolphin = 101;
// const data1Koala = 109;
// const data2Koala = 95;
// const data3Koala = 106;


const averageScoreDolphin = (data1Dolphin + data2Dolphin + data3Dolphin) / 3
const averageScoreKoala = (data1Koala + data2Koala + data3Koala) / 3

console.log(averageScoreDolphin, averageScoreKoala);

if (averageScoreDolphin > averageScoreKoala) {
    console.log("The winner is Dolphin.");
} else if (averageScoreDolphin === averageScoreKoala) {
    console.log("its a draw.");
} else {
    console.log("The winner is Koala.");
}


const minScore = 100;

if ((averageScoreDolphin > averageScoreKoala) && (averageScoreDolphin >= minScore)) {
    console.log(".Dolphin wins the trophy.");
} else if ((averageScoreDolphin === averageScoreKoala) && (averageScoreDolphin >= minScore)) {
    console.log("its a draw.Both wins the trophy.");
} else if ((averageScoreKoala > averageScoreDolphin) && (averageScoreKoala >= minScore)) {
    console.log("Koala wins the trophy.");
} else {
    console.log("No team wins the trophy..");
}

*/

//////////////////////////////////////////////////////////////

/*

////////////////////////
// switch statement

// const day = 'monday';
// const day = 'wednesday';
const day = 'thursday';
// const day = '5';
switch (day) {
    case 'monday': //performs strict equality , checks day === 'monday'
        console.log('Plan course structure.');
        console.log('Do coding.');
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':  //if (wednesday || thursday)
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy weekends.');
        break;
    default:
        console.log('not a valid day.');
}

// same above program using if else statement instead of switch statement
if (day === 'monday') {
    console.log('Plan course structure.');
    console.log('Do coding.');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos.');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples.');
} else if (day === 'friday') {
    console.log('Record videos.');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy weekends.');
} else {
    console.log('not a valid day.');
}

*/

//////////////////////////////////////////////////////////////////

/*

////////////////////////
// expressions and statements

//expressions -> can produce value by itself
//examples of expression
true;
'jonas';
true && false && true;
let a = 3;
a > 4;
const str = "Bibash";

//statements -> cant produce value by itself
//example : if/else,switch statements etc;
if (23 > 10) {
    const string = "Sujan";
    console.log(`i am ${string}`);
}

//expressions can be placed in template literal
console.log(`i'm ${20 - 10} years old.`);

//statements cannot be placed in template literal
// console.log(`i'm ${if (23 > 10) {
//     const string = "Sujan";
//     console.log(`i am ${string}`);
// }} years old.`);
// //error

*/

/////////////////////////////////////////////////////////////

/*

////////////////////////
// the conditional(ternary) operator

const age = 23;
// const age = 2;
age >= 18 ? console.log(`i like to drink wine 🍷`) : console.log(`i like to drink water 💧`);

// ternary operator gives/is a expression.==> prodeces/returns/gives a value
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

//same code using if else statement
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 == 'water'
}
console.log(drink2);

// also  since ,it is a expression , it an be used in template literal
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

*/

/////////////////////////////////////////////////////////////////

/*

/////////////////////
// Coding Challenge #4 solution

//Test data 1
const bill = 275;

// //Test data 2
// const bill = 40;

// //Test data 3
// const bill = 430;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;

console.log(`The bill value is Rs.${bill}, the tip is Rs.${tip} and the final value is Rs.${bill + tip}`);

*/


















