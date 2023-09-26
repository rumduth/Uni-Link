'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const sign_in_button = document.querySelector(`#sign__in`);
const sign_in_entries = document.querySelector(`.sign_in`);
const sign_up_button = document.querySelector(`#sign__up`);
const sign_up_entries = document.querySelector(`sign_up`)
const hour_label = document.querySelector(`.hour`);






sign_in_button.addEventListener('click',function()
{
    modal.classList.add('not_hidden');
    overlay.classList.remove('hidden')
})

sign_up_button.addEventListener('click',function()
{
    modal.classList.add('not_hidden');
    overlay.classList.remove('hidden')
})


const close_modal = document.querySelector('.close-modal');

close_modal.addEventListener('click',function()
{
    modal.classList.remove('not_hidden');
    overlay.classList.add('hidden');
})








setInterval(function()
{
  hour_label.textContent = new Intl.DateTimeFormat(navigator.language,{
    hour: `numeric`,
    minute: `numeric`,
    second: `numeric`
  }).format(new Date());
},1000);









/*

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
*/