/*

//////////////////////////
// assignment: values ans variables

let population = 30; //3 crore == 30 million
let country = "Nepal";
let continent = 'asia';
console.log(country, population, continent);
console.log("My country is " + country + " with population of " + population);

*/

/////////////////////////////////////////////////////////

/*

////////////////////////////
// assignment: datatype

let isIsland = false, country = "Nepal", language;
let population = 30; //3 crore == 30 million

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

*/

/////////////////////////////////////////////////////

/*

////////////////////////////
// assignment: let , const and var

let population = 30; //3 crore == 30 million
const country = "Nepal";
const continent = 'asia';
const isIsland = false;
const language = "Nepali"

// language = "English" //gives error==> assignment yo constant variable

*/

/////////////////////////////////////////////////////

/*

////////////////////////////
// assignment: basic operators
const country = "Nepal";
const continent = 'asia';
const isIsland = false;
const language = "Nepali"

let population = 30; //3 crore == 30 million
population /= 2; // population = population / 2;
console.log('each half of my country will have ' + population + ' population');

population++;
console.log(population);

let checkPopulation = population > 6;
console.log(checkPopulation);

averagePopulation = 33; //33 million
checkPopulation = population < averagePopulation;
console.log(checkPopulation);

const description = country + " is in " + continent + " and its " + population + " speak " + language;
console.log(description);

*/

////////////////////////////////////////////////////////////

/*

////////////////////////////
// assignment: strings and template literals
const country = "Nepal";
const continent = 'asia';
const isIsland = false;
const language = "Nepali";
let population = 30; //3 crore == 30 million

const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

*/

/////////////////////////////////////////////////////////////

/*

////////////////////////////
// assignment: decison making: if else statement

const population = 30; //3 crore == 30 million

if (population > 33) {
    console.log(`Nepal's population is above average.`)
} else {
    console.log(`Nepal's population is ${33 - population} million below average.`)
}

*/

///////////////////////////////////////////////////

/*

////////////////////////////
// assignment: type coercion
//in copy as it was done in google chrome console

*/

//////////////////////////////////////////////////////////////

/*

////////////////////
// assignment: equality operators(== vs ===)

// const numNeighbours = prompt("How many neighbouring countries does your country have?");
const numNeighbours = Number(prompt("How many neighbouring countries does your country have?"));

// if (numNeighbours == 1) console.log("Only 1 border");
// else if (numNeighbours > 1) console.log("More than2 1 border");
// else console.log("No borders");

if (numNeighbours === 1) console.log("Only 1 border");
else if (numNeighbours > 1) console.log("More than2 1 border");
else console.log("No borders");

*/

//////////////////////////////////////////////////////////////

/*

/////////////////////
// assignment: boolean logic and logical operators

const country = 'Nepal'
const language = "Nepali";
// const language = "english";
let population = 30; //3 crore == 30 million
const isIsland = false;

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} doesnot meet your criteria`);
}

*/

/////////////////////////////////////////////////////////////////

/*

////////////////////////
// switch statement

// const language = 'chinese';
// const language = 'mandarin';
const language = 'nepali';
// const language = 'hindi';
// const language = '5';
switch (language) {
    case 'chinese':
    case 'mandarin': //if (language === chinese || language === mandarin)
        console.log('MOST number of native speakers.');
        break;
    case 'spanish':
        console.log('2nd place in the number of native speakers.');
        break;
    case 'english':
        console.log('3rd place.');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arbic':
        console.log('5th most spoken language.');
        break;
    default:
        console.log('Great language too :D');
}

*/

////////////////////////////////////////////////////////////////

/*

////////////////////////
// assignment: the conditional/ternary operator

const population = 30; //3 crore = 30 million;
console.log(`Nepal's population is ${population > 33 ? 'above' : 'below'} average.`);

*/






