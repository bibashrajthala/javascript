////////////////
// Exporting and Importing ES6 modules in Practice

// Importing module ==> script.js

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');
// // console.log(shoppingCost); // error => cant use without importing from  'exporting module'

// addToCart('bread', 5);

// //importing all values at once from exporting module
// import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing module');
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// importing default exported value=> without {}
// import add from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';

console.log('Importing module');
add('pizza', 2);
add('burger', 2);
console.log(cart);

// Traditional way of importing ,(Still used in node.js)
// importing using require()
// need to configure something now to use it.

// const { addToCart } = require('./shoppingCart.js');
// same as:
// import { addToCart } from './shoppingCart.js';

// const add = require('shoppingCart.js');
// same as:
// import add from './shoppingCart.js';

///////////////////////////////////////////
// introduction to NPM

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateShallowClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateShallowClone);
console.log(stateDeepClone);

// hot module replacement for parcel
if (module.hot) {
  module.hot.accept();
}

// import , for polyfilling

import 'core-js/stable';
import 'regenerator-runtime/runtime';

cart.find(el => el.quantity > 2);
Promise.resolve('polyfill it').then(res => console.log(res));
