const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = 'feedback-from-state';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

/////////////////save data to localStarage///////////////////
formEl.addEventListener('input', onInput);

function onInput(evt) {
  const userData = { email: inputEmailEl.value, message: textareaEl.value };

  const userDataJSON = JSON.stringify(userData);
  localStorage.setItem(LOCALSTORAGE_KEY, userDataJSON);
}

///////////////submit data//////////////////////////////
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
/////////////////auto-complete/////////////////////////////
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedMessage) {
    inputEmailEl.value = savedMessage.email;
    textareaEl.value = savedMessage.message;
  }
}

populateTextarea();
