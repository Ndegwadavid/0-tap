import { loginUser } from './apiCalls.js';

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.email.value; 
  const tapCode = getTapCodeFromUser();

  loginUser(email, tapCode)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

function getTapCodeFromUser() {}