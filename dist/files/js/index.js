const email = document.getElementById("email");
const signup = document.getElementById("signup");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lasttName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById('confirmPassword')


function wrongInf(params) {
	if (params.classList.contains("wrongInf")) {
		params.classList.remove("inputContent");
	} else {
		params.classList.remove("inputContent");
		params.classList.add("wrongInf");
	}
}
function goodInf(params) {
	if (params.classList.contains("inputContent")) {
		params.classList.remove("wrongInf");
	} else {
		params.classList.add("inputContent");
		params.classList.remove("wrongInf");
	}
}

function validateEmail() {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
		goodInf(email);
	} else {
		wrongInf(email);
	}
}
function validateNameOrLastName(input) {
	if (input.value.length > 1) {
		goodInf(input);
	} else {
		wrongInf(input);
	}
}

function validatePass(password) {
	const largeLetters = /^.*[A-Z]+.*$/;
	const smallLetters = /^.*[a-z]+.*$/;
	const numbers = /^.*[0-9]+.*$/;
	if (
		largeLetters.test(password.value) &&
		smallLetters.test(password.value) &&
		numbers.test(password.value) &&
		password.value.length >= 8
	) {
		goodInf(password);
	} else {
		console.log("notok");
    alert('The user password must contain at least 8 characters, uppercase and lowercase letters, and numbers.')
		wrongInf(password);
	}
}
function checkConfirmPassword() {
  if (confirmPassword.value === password.value) {
    goodInf(confirmPassword)
  } else{
    wrongInf(confirmPassword)
  }
}

function checkForm() {
	validateEmail();
	validateNameOrLastName(firstName);
	validateNameOrLastName(lastName);
	validatePass(password);
 checkConfirmPassword();
}

signup.addEventListener("click", checkForm);
