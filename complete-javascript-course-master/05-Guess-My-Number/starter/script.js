'use strict';

/*

/////////////////////
//// starting with DOM manipulation

// select a selector from the html(element , class , or id)
document.querySelector('.message');
console.log(document.querySelector('.message'));

// select text content of the selected element
console.log(document.querySelector('.message').textContent);

// set/change text content of selected element
document.querySelector('.message').textContent = 'Too High';
console.log(document.querySelector('.message').textContent);

*/

/////////////////////////////////////////////

/*

///////////////
// Selecting and manipulating html elements

//selection and manipulating text content of selected elements and logging changes/manipulated content in console
document.querySelector('.message');
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct answer';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// but to select and manipulate content/value of input field , we need to use .value property instead of .textContent property
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

/////////////////////////////////////////////

//  ------ HERE THE ACTUAL PROJECT STARTS -----  //

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

// Refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  // or,
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number ❌';
    displayMessage('No number ❌');

    // when user wins/ guesses correct answer
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct answer ✔';
    displayMessage('Correct answer ✔');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Refactoring
    // when guess is incorrect i.e, different than secret number
  } else if (guess !== secretNumber) {
    //or
    //else if(guess > secretNumber || guess < secretNumber){

    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High ⬆' : 'Too Low ⬇';
      displayMessage(guess > secretNumber ? 'Too High ⬆' : 'Too Low ⬇');

      score--;
      document.querySelector('.score').textContent = score; //display/update decreased score
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
    //when guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High ⬆';

      score--;
      document.querySelector('.score').textContent = score; //display/update decreased score
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low ⬇';

      score--;
      document.querySelector('.score').textContent = score; //display/update decreased score
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

//reseting the game when again! button is clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score; // score =20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //empty string = no value at all;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
