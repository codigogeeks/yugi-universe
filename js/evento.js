const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const formulario = document.getElementById('formulario');

signUpButton.addEventListener('click', () => {
	formulario.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	formulario.classList.remove("right-panel-active");
});