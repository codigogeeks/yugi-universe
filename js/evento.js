const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const formulario = document.getElementById('formulario');

signUpButton.addEventListener('click', () => {
	formulario.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	formulario.classList.remove("right-panel-active");
});

const card1 = document.querySelector('.card1__inner');
const card2 = document.querySelector('.card2__inner');
const card3 = document.querySelector('.card3__inner');

card1.addEventListener("mouseover", () => {
	card1.classList.toggle('is-flipped');
});

card1.addEventListener("mouseout", () => {
	card1.classList.toggle('is-flipped');
});

card2.addEventListener("mouseover", () => {
	card2.classList.toggle('is-flipped');
});

card2.addEventListener("mouseout", () => {
	card2.classList.toggle('is-flipped');
});

card3.addEventListener("mouseover", () => {
	card3.classList.toggle('is-flipped');
});

card3.addEventListener("mouseout", () => {
	card3.classList.toggle('is-flipped');
});

// botao
