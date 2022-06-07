'use strict';

/*

/////////////////
//// functions

function describeCountry(country, popualtion, capitalCity) {
    return `${country} has ${popualtion} million people and its capital city is ${capitalCity}.`;
}

const country1 = describeCountry('Finland', 6, 'Helsinki');
const country2 = describeCountry('Nepal', 30, 'Kathmandu');
const country3 = describeCountry('India', 1300, 'New Delhi');
console.log(country1, country2, country3);

*/

///////////////////////////////////////////////////////

/*

//////////////////
//// function declarations and function expressions

//function declaration
const worldPopulation = 7900;
function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const percentOfPopulationChina = percentageOfWorld1(1441);
const percentOfPopulationNepal = percentageOfWorld1(30);
const percentOfPopulationIndia = percentageOfWorld1(1300);

console.log(percentOfPopulationChina, percentOfPopulationNepal, percentOfPopulationIndia);

//function expression
const percentageOfWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}

const percentOfPopulationChina2 = percentageOfWorld2(1441);
const percentOfPopulationNepal2 = percentageOfWorld2(30);
const percentOfPopulationIndia2 = percentageOfWorld2(1300);

console.log(percentOfPopulationChina2, percentOfPopulationNepal2, percentOfPopulationIndia2);

*/

/////////////////////////////////////////////////////

/*

////////////////////
//// arrow functions
const worldPopulation = 7900;
const percentageOfWorld3 = population => (population / worldPopulation) * 100;

const percentOfPopulationChina3 = percentageOfWorld3(1441);
const percentOfPopulationNepal3 = percentageOfWorld3(30);
const percentOfPopulationIndia3 = percentageOfWorld3(1300);

console.log(percentOfPopulationChina3, percentOfPopulationNepal3, percentOfPopulationIndia3);

*/

///////////////////////////////////////////////

/*

////////////////////////
//// functions calling other functions

const percentageOfWorld = population => (population / 7900) * 100;

const describePopulation = function (country, population) {
    const percentOfPopulation = percentageOfWorld(population);

    return `${country} has ${population} million people, which is about ${percentOfPopulation}% of the world.`
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Nepal', 30));

*/

//////////////////////////////////////////////////

/*

////////////////////
//// introduction to array

const populations = [1441, 30, 1300, 6];

console.log(populations);
console.log(populations.length === 4);

if (populations.length === 4) console.log(true);

const percentageOfWorld = population => (population / 7900) * 100;

const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];

console.log(percentages);

*/

//////////////////////////////////////////////////////

/*

/////////////////////////
// array methods

const neighbours = ['India', 'China'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) console.log('Probably not a European country :D');
// OR
//if (neighbours.includes('Germany') === false) console.log('Probably not a European country :D');

console.log(neighbours.indexOf('India'));

neighbours[neighbours.indexOf('India')] = 'Bhutan'; // neighbours[0] = 'Bhutan';
console.log(neighbours);

*/

////////////////////////////////////////////////////////

/*

////////////////////////
//// introduction to objects

const myCountry = {
    country: 'Nepal',
    capital: 'Kathmandu',
    language: 'Nepali',
    population: 30,
    neighbours: ['India', 'China']
};
console.log(myCountry);

*/

////////////////////////////////////////

/*

/////////////////
//// dot and bracket notation

const myCountry = {
    country: 'Nepal',
    capital: 'Kathmandu',
    language: 'Nepali',
    population: 30,
    neighbours: ['India', 'China']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and the capital is ${myCountry.capital}.`)

myCountry.population += 2; // a = a + 2;
console.log(myCountry.population);

myCountry['population'] -= 2; // a =  a - 2;s
console.log(myCountry['population']);

*/

//////////////////////////////////////////////////////////

/*

////////////////////////
//// object methods

const myCountry = {
    country: 'Nepal',
    capital: 'Kathmandu',
    language: 'Nepali',
    population: 30,
    neighbours: ['India', 'China'],
    describe: function () {  //method
        this.sentence = `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and the capital is ${this.capital}.`;

        return this.sentence;
    },
    checkIsIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;

        // // OR , even simpler way
        // this.isIsland = !Boolean(this.neighbours.length);//if 0 => falsy value=>false,else truthy value => true
        // return this.isIsland;
    }
};

console.log(myCountry.describe());
console.log(myCountry.sentence);

console.log(myCountry.checkIsIsland());
console.log(myCountry.isIsland);

*/

///////////////////////////////////////////////////

/*

////////////////////
// iteration: the for loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter no. ${i} is currently voting`);
}

*/

/////////////////////////////////////////////////
/*

/////////////////////////////
//// looping array , breaking and continuing

const populations = [1441, 30, 1300, 6];

const percentage2 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentage2.push(perc);

    //Or , directly do:
    //percentage2.push(percentageOfWorld1(populations[i]))
}

console.log(percentage2);

*/

///////////////////////////////////////////

/*

/////////////////////
///// looping backwards and loops in loops=> Nested loops

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

*/

////////////////////////////////////////////////

/*

///////////////
//// while loop

const populations = [1441, 30, 1300, 6];

const percentage3 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentage3.push(perc);

    //Or , directly do:
    //percentage3.push(percentageOfWorld1(populations[i]))

    i++;
}

console.log(percentage3);

*/










