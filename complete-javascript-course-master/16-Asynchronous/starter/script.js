'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////////

/*

/////////////////////
// asynchronous js,AJAX, and APIs

// // synchronous lines of code
// const p = document.querySelector('.p');
// p.textContent = 'My name is Jonas';
// alert('text self'); // this line blocks the execution of lines of code below it until we click ok button on alert box appearing on our screen
// p.style.color = 'red';

// // asynchronous code
// const p = document.querySelector('.p');
// setTimeout(
//   // this asynchronous task run in background without blocking execution of code below it
//   (function () {
//     p.textContent = 'My name is Jonas';
//   },
//   5000)
// );
// p.style.color = 'red';

*/

/////////////////////////////////////////////////

/*

/////////////////////
// callback hell / pyramid of doom  ==> callbacks inside of callback

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

*/

/////////////////////////////////////////////////

/*

/////////////////////
// promises and fetch API

const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request); // gives a promise ie, fetch() returns a promise

*/

///////////////////////////////////////////////

/*

////////////////////
// consuming promise

const getCountryData = function (country) {
  //   fetch(`https://restcountries.com/v2/name/${country}`)
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       return data;
  //     });

  // simplifying above code using arrow function
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => data);
};

getCountryData('portugal');

*/

///////////////////////////////////////////////

/*

////////////////////
// chaining promise

const alertFunc = function () {
  fetch(`https://restcountries.com/v2/name/portugal`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return 23;
    })
    .then(data => alert(data));
};

alertFunc();

// escaping callback hell using chain of promise
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/name/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
};
getCountryData('portugal');

*/

////////////////////////////////////////

/*

/////////////////////
// handling rejected promises => handling error in promises

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/name/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.error(`${err} ❌❌`);
      renderError(`${err} Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  //   getCountryData('portugal');
  getCountryData('ffggghhii');
});

*/

////////////////////////////////////////

/*

/////////////////////
// throwing errors manually

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getCountryData = function (country) {
  //   Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);

      // if(response.ok === false)
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      console.log(data);

      //   const neighbour = data[0].borders[0];
      const neighbour = 'fhfgdhdjdj';

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/name/${neighbour}`);
    })
    .then(response => {
      // if(response.ok === false)
      if (!response.ok)
        throw new Error(`Country neighbour not found (${response.status})`);

      return response.json();
    })

    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.error(`${err} ❌❌`);
      renderError(`${err} Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
  //   getCountryData('ffggghhii');
});



// refactoring above code

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);

    // if(response.ok === false)
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData1 = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found')
    .then(data => {
      console.log(data);

      const neighbour = data[0]?.borders;
      //   const neighbour = 'fhfgdhdjdj';

      if (!neighbour) throw new Error('No  neighbour found!');

      return getJSON(
        `https://restcountries.com/v2/name/${neighbour}`,
        'Country neighbour Not Found'
      );
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.error(`${err} ❌❌`);
      renderError(`${err} Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData1('australia'); // aus is country with no neighbour
});

*/

/////////////////////////////////////////////////

/*

////////////////
// Event loop in practice

setTimeout(() => {
  console.log('0 second timer');
}, 0);
console.log('test start');
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('test end');

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 1; i <= 1000000000; i++) {}
  console.log(res);
});

*/

//////////////////////////////////////////////////////

/*

///////////
/// building a simple promise

// one way
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You won!');
    } else {
      reject('You lost');
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// another way
//fullfilled promise
Promise.resolve('it is a fulfilled promise').then(res => console.log(res));
Promise.reject('it is a rejected promise').catch(err => console.error(err));

//comment above code

// callback hell in setTimeout()
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
    }, 1000);
  }, 1000);
}, 1000);

//comment above code

// promisifying above code
// promisifying setTimeout()
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  });

*/

//////////////////////////////////////////////////

/*

//////////////
/// consuming promise with async_await

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  //   console.log(res);
  const data = await res.json();
  console.log(data);
};
whereAmI('portugal');
console.log('first');

*/

/////////////////////////////////////////////////

/*

////////////////////
// error handling with try...catch in async function

// try catch in synchronous code
// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (err) {
//   alert(`${err.message} ❌❌`);
// }

// try...catch in async function
const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(`${err} ❌❌`);
    alert(`${err.message} ❌❌`);
  }
};
// whereAmI('portugal');
whereAmI();
console.log('first');

*/

/////////////////////////////////////////////

/*

///////////////
// returning values from async function

const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    // console.log(data);

    return `2: You are in ${data[0].capital}`;
  } catch (err) {
    console.log(`${err} ❌❌`);

    throw err;
  }
};

// console.log('1: First get country data');
// whereAmI('portugalllll')
//   // whereAmI('portugal')
//   .then(res => console.log(res))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished gettingcountry data'));
// // console.log('3: Finished gettingcountry data');

// above thing using try catch(using IIFE)
console.log('1: First get country data');
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished gettingcountry data');
})();

*/

/////////////////////////////////////////////////

/////////////////////
// running promises in parallel

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);

    // if(response.ok === false)
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
};

const get3countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    // console.log(data);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3countries('portugal', 'canada', 'tanzania');
