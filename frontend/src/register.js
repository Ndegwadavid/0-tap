import { registerUser } from './apiCalls.js';

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = registerForm.name.value;
  const email = registerForm.email.value;
  const tapCode = getTapCodeFromUser(); 
  registerUser(name, email, tapCode)
    .then(response => {
      console.log(response.data); 
    })
    .catch(error => {
      console.log(error);
    });

});

function getTapCodeFromUser() {
  
}