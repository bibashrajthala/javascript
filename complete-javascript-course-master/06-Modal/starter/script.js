'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//opening or showing/displaying the modal/popup
/*
for (let i = 0; i < btnsOpenModal.length; i++) {
  //   console.log(btnsOpenModal[i]);
  //   console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
*/
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//closing or hiding the modal/popup

// closing modal: way 1 : click on ❌ button
/*
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/
btnCloseModal.addEventListener('click', closeModal);

// closing modal: way 2 : click on blurred background of popup/modal
overlay.addEventListener('click', closeModal);

// closing modal: way 2 : press on "Esc" key of keyboard
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  //   console.log(e['key']);
  //   console.log(e.key);

  /*
  if (e.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
  */

  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
