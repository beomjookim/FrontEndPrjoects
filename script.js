'use strict';

// get all the necessary selections and set them as variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// actual event listeners
// when clicked - open modals
for (let mod of buttonOpenModal) mod.addEventListener('click', openModal);

// close modal options
buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') closeModal();
});
