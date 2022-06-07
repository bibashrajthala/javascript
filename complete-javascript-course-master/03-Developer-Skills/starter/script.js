// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*

///////////////////
//// adding prettier tool and automating snippets in vs code

const x = '23';

if (x === 23) console.log(4);

const calcAge = birthyear => 2037 - birthyear;

console.log(); //TYpe "cl", press enter

*/

///////////////////////////////////////////////////////

/*

/////////////////////
//// using google chrome, stack overflow , MDN web documentation

//problem 1: in copy sectoin 5 ,lecture 59 with steps to solve any problem

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temperature));

//problem 2: in copy sectoin 5 ,lecture 59 with steps to solve any problem

const calcTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitudeNew([2, 3, 4], [5, 6, 7]));

*/

//////////////////////////////////////////////

/*

///////////////////////
//// debugging with developer console and debugger(sources and breakpoints)

//problem 1: in copy section 5 ,lecture 61

//Using developer console
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // 3) Correct bug
    value: Number(prompt('Degree celsius:')),
    // value: 10,
  };

  // 2) Fing bug
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// 1) Identify bug
console.log(measureKelvin());

//problem 2: in copy section 5 ,lecture 61

//Using debugger/source and its breakpoints

const temperature = [3, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
 
  let min = 0; //bug
  //to fox bug do:
  // let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temperature));

*/

/////////////////////////////////////////////////////

/*

/////////////////////
// coding challlenge #1 solution

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForcast = function (arr) {
  let str = '';

  //or,
  // let str = '... ';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} C in ${i + 1} days ... `;
  }
  return '... ' + str;
  //or, if above or is used
  //return str;
};

console.log(printForcast(data1));
console.log(printForcast(data2));

*/
