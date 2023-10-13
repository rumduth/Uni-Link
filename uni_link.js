'use strict';
/*Element query name Information*/
const modal = document.querySelectorAll('.modal');
console.log(modal);
const overlay = document.querySelector('.overlay');
const sign_in_button = document.querySelector(`#sign__in`);
const sign_in_entries = document.querySelector(`.sign_in`);
const sign_up_button = document.querySelector(`#sign__up`);
const sign_up_entries = document.querySelector(`.sign_up`)
const hour_label = document.querySelector(`.hour`);
const btn_sign_in = document.querySelector(`.btn__sign_in`)
const user_name_sign_in = document.querySelector(`#user_name_sign_in`);
const pass_word_sign_in = document.querySelector(`#pass_word_sign_in`);
const advertisement = document.querySelector(`.advertisements`); //for things in middle
const newFeed = document.querySelector(`.newFeed`);
const user_friend = document.querySelector(`#user_friend`);
const user_name = document.querySelector(`#user_name`);
const user_major = document.querySelector(`#user_major`);
const user_action = document.querySelector(`#user_action`);
/*Element query name Information*/

/*Account Information*/

const account1 = {
  full_name: `Thong Nguyen`,
  major: `Computer Science`,
  username: `tdn0106`,
  password: `123456`,
  student_id: `11493388`,
  phone_number: `9406295520`,
  friends: ['George', 'Arlene', 'Jacob'],
  email: `rumduth1@gmail.com`,
  actions: [`At 11:30: Arlene shared post about Hackathon Event`, `At 7:30: Jacob shared his new achievement in Data Structure`, `At 8:30: George shared his thoughts about new school policy`]
}

const account2 = {
  full_name: `Georgie`,
  major: `Computer Science`,
  username: `goi0912`,
  password: `123453`,
  student_id: `11493382`,
  phone_number: `9406295521`,
  email: `rumduth2@gmail.com`
}
const account3 = {
  full_name: `Arlene`,
  major: `Computer Science`,
  username: `arl1231`,
  password: `123453`,
  student_id: `11493382`,
  phone_number: `9406295521`,
  email: `rumduth2@gmail.com`
}
const account4 = {
  full_name: `Jacob`,
  major: `Computer Science`,
  username: `jov2212`,
  password: `123453`,
  student_id: `11493382`,
  phone_number: `9406295521`,
  email: `rumduth2@gmail.com`
}

let currentAccount;

const accounts = [account1,account2, account3, account4];
btn_sign_in.addEventListener('click',function()
{
  let username = String(user_name_sign_in.value);
  let password = String(pass_word_sign_in.value);
  let i = accounts.findIndex( acc => acc.username === username && acc.password === password)
    if(i === -1)alert('No Information.')
  else
  {
    currentAccount = accounts[i];
    advertisement.classList.add(`hidden`);
    sign_in_entries.classList.remove('not_hidden');
    overlay.classList.add('hidden');
    newFeed.classList.remove(`hidden`);
    user_name.textContent = `Good afternoon, ${currentAccount.full_name}`;
    console.log(currentAccount.full_name);
    user_major.textContent = `Your major: ${currentAccount.major}`;
    let friendList = currentAccount.friends.join(', ');
    console.log(`${currentAccount.major}`);
    user_friend.textContent = `Your have ${currentAccount.friends.length} friends: ${friendList}`;
    let actionList = currentAccount.actions.join(',\n');
    user_action.textContent = `Below are your friend actions:\n ${actionList}`;
  }
    
})

















/*Account Information*/









console.log(modal[0] === sign_up_entries)
console.log(sign_up_entries)


sign_in_button.addEventListener('click',function()
{
    sign_in_entries.classList.add('not_hidden');
    overlay.classList.remove('hidden')
})

sign_up_button.addEventListener('click',function()
{
    sign_up_entries.classList.add('not_hidden');
    overlay.classList.remove('hidden')
})


document.querySelector('.close-sign-in').addEventListener('click',function()
{
  sign_in_entries.classList.remove('not_hidden');
  overlay.classList.add('hidden');
});

document.querySelector('.close-sign-up').addEventListener('click',function()
{
  sign_up_entries.classList.remove('not_hidden');
  overlay.classList.add('hidden');
});







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