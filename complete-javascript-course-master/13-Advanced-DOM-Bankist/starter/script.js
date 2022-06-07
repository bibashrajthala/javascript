'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////

//////////
// LECTURES

////////////////////////////
//// selecting ,creating/inserting and deleting elements

// Selecting Elements

console.log(document.documentElement); // selects whole html document as dom element
console.log(document.head); // selecting <head>
console.log(document.body); // selecting <body>

// modern and mostly used methods to select elements
document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1'); // selects element by unique id

const allButtons = document.getElementsByTagName('button'); // selects all buttons by the elment tag name
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // selects all elements with class .btn

// Creating and Inserting Elements

// method 1 : mostly widely and commonly used
// const header = document.querySelector('.header');
// const html = `<h3>hello</h3>`;
// header.insertAdjacentHTML('afterbegin', html);

// method 2 : progamatically create element
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We used cookie!'
message.innerHTML = `We used cookie for improved funcitonality
<button class = "btn--close-cookie">Got it!</button>`;

const header = document.querySelector('.header');
header.prepend(message); // insert/add message element as first child of header
header.append(message); // insert/add message element as last child of header

// to create multiple of element, we clone/copy them
// header.append(message.cloneNode(true));

// to insert as sibling
header.before(message); // insert message element as sibling of header above it
header.after(message); // insert message element as sibling of header belows it

// deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // modern way to remove element => es6+  // better way
    // message.parentElement.removeChild(message);  // traditional old way
  });

/////////////////////////////////////////////////////////

/*

////////////////////////
///// styles,attribure, and classes

// Styles

// Setting styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Getting styles
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// setting new height/ adding height
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 20 + 'px';

// different way to set style: setProperty()
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

// Accessing/reading attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // gives value of alt attribute of <img".nav__logo"> element
console.log(logo.src);
console.log(logo.className);

// another way to read/get attributes : getAttribute(attribute)
console.log(logo.designer); // dont work for non standard attributes
console.log(logo.getAttribute('designer'));

console.log(logo.src); // gives absolute url
console.log(logo.getAttribute('src')); // gives url used in html(relative or absolute)

const link = document.querySelector('.nav__link--btn');
// console.log(link);
console.log(link.href);
console.log(link.getAttribute('href'));

// setting or changing attribute values
// 2 ways
logo.alt = 'beautiful minimalist logo';
logo.setAttribute('company', 'bankist');

// Data attributes
console.log(logo.dataset.versionNumber);

// classes

// adding/setting,changing,removing classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // similar to includes() array method

// reading class
console.log(logo.className);

// another way to set class
// traditional way, not preferred
logo.className = 'Jonas';

*/

//////////////////////////////////////////

/*

////////////////
//// types of event and event handlers

// lets use a mouse event
const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function () {
//   alert('You are reading Headings');
// });

// 3 ways of handling event listeners/handlers

/// 1.
// using addEventListener()
// best and preferred way

// traditional ways

// 2.
// using onevent = "event_handler" directly on selected element
// h1.onclick = function (e) {
//   alert('its heading');
// };

// 3.
// using onevent = "event_handler" directly as attribute = "value" in HTML
// example
 // <h1 onclick="alert('hello!')"></h1>

// removing event listener
const alertH1 = function () {
  alert('hello!');

  // h1.removeEventListener('click', alertH1);
};
h1.addEventListener('click', alertH1);
setTimeout(() => h1.removeEventListener('click', alertH1), 5000);


*/

//////////////////////////////////////

//////////////////
//// DOM Traversing

const h1 = document.querySelector('h1');

// Going downward ( ancestors/parents to descendants/childs)
console.log(h1.childNodes);
console.log(h1.children); // all  direct child elements
console.log(h1.querySelectorAll('.highlight')); // all descendants with class .highlight
h1.firstElementChild.style.color = 'white'; // select first child of <h1>
h1.lastElementChild.style.color = 'orangered'; // select last child of <h1>

// Going upwards (descendants/childs to ancestors/parents )
console.log(h1.parentNode); //gives  direct parent nodes
console.log(h1.parentElement); // five direct parent element
h1.closest('.header').style.background = 'var(--gradient-secondary)'; // select a closest ancestor of h1 with class .headers

// Going sideways(siblings)
console.log(h1.previousElementSibling); // sibling of h1 above it
console.log(h1.nextElementSibling); // sibling of h1 below it

console.log(h1.parentElement.children); // all siblings of h1 including h1 itself

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = scale(2);
});
