// Exporting module ==> script.js
console.log('Exporting module');

const shoppingCost = 10;
export const cart = [];

// named export
// multiple named exports possible
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// also named export
export { totalPrice, totalQuantity as tq };

// default export
// only one in one module/file
// can name anything in importing file

// export default addToCart;
//or
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
