'use strict';

/*

/////////////////////////////////////////////////
/////// Destructuring array

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// skippping an element of array
[main, , secondary] = restaurant.categories;
console.log(main, secondary);

// // switching variables values without destructuring (mutating variables)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// switching variables values with destructuring (mutating variables
[secondary, main] = [main, secondary];
console.log(main, secondary);

// recieve array as return from function
console.log(restaurant.order(2, 0));

// recieve two return values from function using destructuring
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring ==> destructuring in nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// Nested destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// setting default values otherwise can give undefined
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // r is undefined
// setting default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const [l = 1, m = 1, n = 1] = [3];
console.log(l, m, n);

*/

///////////////////////////////////////////////////////////

/*

//////////////////////////////////////////////
///// Destructuring objects

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address: location = '',
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${location}  at ${time}.`
    );
  },
};

// destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// renaming
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//setting default values otherwise can give undefined
// const { menu } = restaurant;
// console.log(menu); //menu is undefined
// setting default values
// const { menu = [] } = restaurant;
// console.log(menu);

// renaming and setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables in destructuring objects is different
let a = 111;
let b = 222;
const obj = { a: 2, b: 4, c: 6 };
// {a,b} =obj; //error
// let { a, b } = obj; //error
// const { a, b } = obj; //error
({ a, b } = obj);
console.log(a, b);

// Nested Destrunturing => Destrunturing in nested object
// const { fri } = openingHours;
// console.log(fri);
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

const {
  fri: { open: o, close: c = 1 },
} = openingHours;
console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'vai del , 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
restaurant.orderDelivery({
  address: 'vai del , 21',
  starterIndex: 1,
});

*/

//////////////////////////////////////////////////////////////////////

/*

/////////////////////////////////
//// the spread operator (...)

const arr = [7, 8, 9];
console.log(arr);
console.log(...arr);
console.log(7, 8, 9);

// adding elements of one array to other without using spread operator
const badArr = [1, 3, arr[0], arr[1], arr[2]];
console.log(badArr);

// adding elements of one array to other using spread operator
const newArr = [1, 2, arr];
console.log(newArr);
const goodArr = [1, 2, ...arr];
console.log(goodArr);

// passing each element of array using spread operator
const fun = function (a, b, c) {
  console.log(a, b, c);
};
const arr1 = [1, 2, 3];
fun(...arr1);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address: location = '',
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${location}  at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// ITERABLES => strings , sets, arrays, maps, but NOT objects
// spread operator in string
const str = 'jonas';
console.log(...str);
console.log('j', 'o', 'n', 'a', 's');
const letters = [...str, '', 's'];
console.log(letters);

// console.log(`${...str}`); //error

// real world examples
// const ingredients = [
//   prompt("let's make pasta/! Ingredient 1 :"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];

//manual way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// spread operator way
// restaurant.orderPasta(...ingredients);

//spread operators in objects
// console.log(...restaurant); // error

const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guieseppe' };
console.log(newRestaurant);

// creating shallow copy of objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'ristore Rome'; //changing property in shallow copy
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

///////////////////////////////////////////////////////////////////////////

/*

/////////////////////////////////////
//// REst pattern and rest operator

// destructuring
//spread, because on right side of =
const arr = [1, 2, ...[3, 4]];

// rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address: location = '',
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${location}  at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },

  orderPizza: function (mainIngredient, ...OtherIngredient) {
    console.log(mainIngredient);
    console.log(OtherIngredient);
  },
};

// rest and spread operator both at once
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// rest pattern should always be only one and at last
// const [a,b,...c,d] = [1,2,3,4,5,6,7,8]; //error
// const [a,b,...c,...d] = [1,2,3,4,5,6,7,8]; //error

// rest operator in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// rest operators in functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 5, 1);
add(1, 3, 5, 73, 2, 3, 4, 6);

const x = [2, 3, 4];
add(...x);
add(2, 3, 4);

restaurant.orderPizza('mushroom', 'onion', 'olive');
restaurant.orderPizza('spinach');

*/

/////////////////////////////////////////////////////////////////

/*

///////////////////////////////////
//// short circuiting (&& and ||)

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address: location = '',
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${location}  at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },

  orderPizza: function (mainIngredient, ...OtherIngredient) {
    console.log(mainIngredient);
    console.log(OtherIngredient);
  },
};

// OR(||) => short circuited when first truthy value is found
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || '' || 'hello' || 23 || 0);

// practical example

//using if/esle or ternary operator
// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// using  or (||) short circuiting
// restaurant.numGuests = 23;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// // AND(&&) => short circuited when first falsy value is found
console.log('-----AND-----');
console.log(0 && 'jonas');
console.log(7 && 'jonas');
console.log('hello' && 23 && null && undefined && 'jonas');

// practical example

// using if/else or ternary operator
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

// using and (&&) short circuiting
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

*/

/////////////////////////////////////////////////////////////////

/*

////////////////////////////
///// the nullish coalesing operator (??)

// nullish value = undefined ,  null

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address: location = '',
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${location}  at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },

  orderPizza: function (mainIngredient, ...OtherIngredient) {
    console.log(mainIngredient);
    console.log(OtherIngredient);
  },
};

// or(||) ==> works on concept of falsy and truthy
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// nullish coalesing(??) ==> works on concept of nullish and non-nullish(truthy ,0,'')
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests ?? 10;
console.log(guest2);

*/

////////////////////////////////////////////////////////

/*

//////////////////////////////////
/// coding challenge #1 solution

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
const [player1, player2] = game.players;
console.log(player1, player2);

// 2)
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// 3)
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// 4)
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5)
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
//same
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6)
const printGoals = function (...playerNames) {
  console.log(playerNames);
  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i]);
  }
  // for (const names of playerNames) {
  //   console.log(names);
  // }
  console.log(`${playerNames.length} goals were scored.`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7)
team1 < team2 && console.log(`team1 is likely to win.`);
team2 < team1 && console.log(`team2 is likely to win.`);

*/
/////////////////////////////////////////////////////////////

/*

/////////////////////////////////////////
//// for-of loop (looping arrays)

const arr = [1, 2, 3, 4, 5];
for (const i of arr) console.log(i);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address: location = '',
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${location}  at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },

  orderPizza: function (mainIngredient, ...OtherIngredient) {
    console.log(mainIngredient);
    console.log(OtherIngredient);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// entries() method
for (const item of menu.entries()) console.log(item);

console.log(menu.entries());
console.log(...menu.entries());
console.log([...menu.entries()]);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}
//same
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}:${element}`);
}

*/

//////////////////////////////////////////////////////////////////////////////

/*

////////////////////////////////////
//// enhanced object literals

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // tradidional way of including outer property
  // openingHours: openingHours,

  // es6 way
  openingHours,

  // traditional way of writing method in object
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // modern enhanced way
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address: location = '',
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${location}  at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },

  orderPizza(mainIngredient, ...OtherIngredient) {
    console.log(mainIngredient);
    console.log(OtherIngredient);
  },
};

console.log(restaurant);

// computing property names => inside ()
const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

console.log(hours);

*/

/////////////////////////////////////////////////////////////////////

/*

/////////////////////////////////
//// optional chaining (?.)

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // tradidional way of including outer property
  // openingHours: openingHours,

  // es6 way
  openingHours,

  // traditional way of writing method in object
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // modern enhanced way
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address: location = '',
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${location}  at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },

  orderPizza(mainIngredient, ...OtherIngredient) {
    console.log(mainIngredient);
    console.log(OtherIngredient);
  },
};

console.log(restaurant.openingHours.mon); //undefined as mon property doesnot exist in openinhours
// console.log(restaurant.openingHours.mon.open); //undefined.mon ==> error

//so, need to read open hours of a day only when properties openingHours and they day in present

// with if else
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}

//with optional chaining (?.)
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  // const open = restaurant.openingHours[day]?.open || 'closed';
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// optoinal chaining on methods
console.log(restaurant.order?.(0, 1) ?? 'Method doesnot Exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesnot Exist');

// optional chaining in arrays
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];

// check if above array is empty

// using if ele
if (users.length > 0) console.log(users[0].name);
else console.log('empty array');

//using optional chaining
console.log(users[0]?.name ?? 'empty array');

*/

////////////////////////////////////////////////////////////////////////

/*

//////////////////////////////////////////////
//// looping objects (for-of loop)

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// property names(keys)
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we open at ${properties.length} days:`;

for (const day of properties) {
  // console.log(day);
  // console.log(openStr);
  openStr += `${day}, `;
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entire object => both key-value pairs
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} , we open at ${open} and close at ${close}`);
}

*/

///////////////////////////////////////////////////////////////////

/*

///////////////////////////////
//// coding challenhe #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}
//or
for (const [index, element] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${element}`);
}

// 2)
let average = 0;
for (const value of Object.values(game.odds)) {
  average += value;
}
average /= Object.values(game.odds).length;
console.log(average);

// 3)
for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr}:${odds}`);
}

// Bonus)
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

*/

///////////////////////////////////////////////////////////////////

/*

///////////////////////////////////
////  sets

// creating sets
// sets using array (from array)
const arr = [1, 1, 2, 3];
const set1 = new Set(arr);
console.log(set1);

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

// empty set
console.log(new Set());

// set using string
console.log(new Set('jonas'));

// size of set
console.log(orderSet.size);

//checking if the element is presentn in the set or not
// has() method
console.log(orderSet.has('pizza'));
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('mushroom'));

// adding  a new elment to set
// add() method
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

// deleting/removing a elments of set
// delete() method
orderSet.delete('Rissotto');
console.log(orderSet);

// As in array, we cant retrieve values out of sets
console.log(orderSet[1]); //undefined

//// deleting/removing all elments of set at once
// clear() method
// orderSet.clear();
// console.log(orderSet);

// loop through sets
for (const order of orderSet) {
  console.log(order);
}

// practical example of set
const staffs = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const uniqueStaffs = new Set(staffs);
console.log(staffs);
console.log(uniqueStaffs);
console.log(staffs.length);
console.log(uniqueStaffs.size);
console.log(new Set(staffs).size);

// converting set to array
console.log([...uniqueStaffs]);

//counting unique characters in string using set size
console.log(new Set('jonas mann').size);

*/

/////////////////////////////////////////////////////////////////////

/*

//////////////////////////////
//// maps fundamentals

// creating map
const rest = new Map(); //empty map
rest.set('name', 'classico Italiano');
rest.set(1, 'Frienze Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Orgainic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are close :C');

console.log(rest);

// getting/accessing value of map properties/keys
console.log(rest.get('name'));
console.log(rest.get('true'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.get('1'));

//using boolean keys of map
// const time = 21;
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// some other methods in map
// has(),delete(),clear(),size
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

// objects and arrays as keys of maps works differently
// a)
rest.set([1, 2], 'test');
console.log(rest.get([1, 2])); // gives undefined
// b)
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr)); // gives 'test'

console.log(rest);

// maps with DOM elements
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

*/

/////////////////////////////////////////////////////////////////////

/*

//////////////////////////////
//// maps iteration

// 2 ways to populate map :
// 1) set() method
// 2) using array of arrays each containing key and value as their elements  directly  in new Map() constructor

const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct🎉'],
  [false, 'try again'],
]);
console.log(question);

//converting object to map
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

// lopp through map
for (const item of question) console.log(item);

// practical example of using map
// Quiz app

console.log(question.get('question'));
// we can also destructure it
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}:${value}`);
}

//taking answer from the user
// const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

// printing if users answer is correct or not
console.log(question.get(question.get('correct') === answer));

//converting map to array
console.log(...question);
console.log([...question]);

// methods in map same as objects
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

/////////////////////////////////////////////////////////////

/*

/////////////////////////////
///// coding challenge #3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)
gameEvents.delete(64);
console.log(gameEvents);

// 3)
console.log(
  `An event happened on average, every ${90 / gameEvents.size} minutes`
);

// 4)
for (const [minute, event] of gameEvents) {
  const halfStr = minute > 45 ? 'Second' : 'First';
  console.log(`(${halfStr} Half) ${minute}: ${event}`);
}

// bonus
const times = [...gameEvents.keys()];
console.log(
  `An event happened on average, every ${
    times[times.length - 1] / gameEvents.size
  } minutes`
);
//or
const time = times.pop();
console.log(
  `An event happened on average, every ${time / gameEvents.size} minutes`
);


*/

//////////////////////////////////////////////////////////////

/*

/////////////////////////////////
//// working with strings part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('b737'[0]);

console.log(airline.length);
console.log('b737'.length);
console.log(airline[3]);

///  indexOf() and lastIndexOf()
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

// slice() methods extracts parts of string using index/position as argument
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// negative index as argument
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//practical example
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got middle seat😒');
  else console.log('You got lucky.you got window of side side.');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// boxing -> Js autoamtically does this when we call methods in string primitives:
console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

*/

//////////////////////////////////////////////////////////////////

/*

////////////////////////////
//// working with string part 2

// method to change case of whole string
// toLowerCase() and toUpperCase()

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

// real life example

// Fix capitalization in passenge's name
const passenger = 'jOnAS';

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//or do all directly in one line
console.log(
  passenger.toLowerCase()[0].toUpperCase() + passenger.toLowerCase().slice(1)
);

// compare user input emails

//using trim(),trimStart(),trimEnd()
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io   \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
//or direcly do all at once in one line
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// replacing parts of string
// replace() methods
const priceGB = '288,97euro';
const priceUS = priceGB.replace('euro', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers came to boarding door 23 boarding door 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // regular expression //will study later

// some methods returning boolean used with string
// includes(),startsWith(),endsWith()
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('boeing'));
console.log(plane.startsWith('Airb'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Aib'));
console.log(plane.endsWith('eo'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('part of new airbus family');

//practice exercise
// checking if passengers bag is allowed or not
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed');
  else console.log('Welcome aboard..');
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('socks and Camera');
checkBaggage('Got a gun for protecTion');

*/

//////////////////////////////////////////////////////////////////////////////

/*

//////////////////////////////////////////////////
//// working with strings part 3

// split() and join() method

// split('splitter') => retruns array from splitted string
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schedtmann'.split(' '));
console.log('Abcd ghbce ijbc'.split('bc'));

// destructuring the array returned from split()
const [firstName, lastName] = 'Jonas Schedmann'.split(' ');
console.log(firstName, lastName);

// join('joiner') => joins array elements and returns string
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
console.log(['I', 'am', 'bibash'].join('---'));

//practical example
// capitalize (first letter) names of a string
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //or
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};
capitalizeName('jessica smith ann davies');
capitalizeName('bibash ram abhishek');

// padding in string => making string of desired length
// padStart() and padEnd() method

const message = 'go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '-'));
console.log('Jonas'.padStart(10, '+').padEnd(30, 'bir'));

// practical example
// masking credit card numbers or login passwords
const maskCreditCard = function (number) {
  const str = String(number);

  const last4Digits = str.slice(-4);
  const maskedNumber = last4Digits.padStart(str.length, '*');
  return maskedNumber;
  //or directly in one line
  // return str.slice(-4).padStart(str.length, '*');
};

console.log(maskCreditCard(34593739));
console.log(maskCreditCard(32324344593739));

// repeat() method
const message2 = 'Bad weather... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(3);
planesInLine(5);

*/

///////////////////////////////////////////////////////////////////

/*

/////////////////////////////
//// coding challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.split('\n');
  // console.log(rows);

  /*
  for (const item of rows) {
    // console.log(item);
    // console.log(item.toLowerCase().trim());
    // console.log(item.toLowerCase().trim().split('_'));
    const [first, second] = item.toLowerCase().trim().split('_');

    // console.log(second.replace(second[0], second[0].toUpperCase()));
    // console.log(first + second.replace(second[0], second[0].toUpperCase()));

    // const output = first + second.replace(second[0], second[0].toUpperCase());
    //or
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    // console.log(output);
    console.log(`${output.padEnd(20)}${'✔'}`);
    console.log(`${output.padEnd(20)}${'✔'}`);
  }
  */
/*
  for (const [i, item] of rows.entries()) {
    const [first, second] = item.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    // console.log(`${output.padEnd(20)}${'✔'}`);
    console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
  }
});

*/

//////////////////////////////////////////////////////////////////////

/* 

//////////////////////////////////////////////
//// string methods practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
// console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  // console.log(flight.split(';'));
  const [type, from, to, time] = flight.split(';');

  // const output = `${type}${from}${to}${time}`;
  // console.log(output);

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}


*/
