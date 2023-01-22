const submitButton = document.getElementById("sign-up-button");
const fullName = document.getElementById("full-name-sign-up");
const fullNameText = document.getElementById("full-name-text");
const userID = document.getElementById("user-id-sign-up");
const userIDText = document.getElementById("user-id-text");
const country = document.getElementById("country-sign-up");
const countryText = document.getElementById("country-text");
const zipCode = document.getElementById("zip-code-sign-up");
const zipCodeText = document.getElementById("zip-code-text");
const language = document.getElementById("language-sign-up");
const languageText = document.getElementById("language-text");
const email = document.getElementById("email-sign-up");
const emailText = document.getElementById("email-text");
const password = document.getElementById("password-sign-up");
const passwordText = document.getElementById("password-text");
const address = document.getElementById("address-sign-up");
const bio = document.getElementById("bio-sign-up");
const gender = document.getElementById("gender-sign-up");

function valid(input, text, message){
  text.textContent = message;
  text.style.color = "green";
  input.style.border = "3px solid green";
}

function invalid(input, text, message){
  text.textContent = message;
  text.style.color = "red";
  input.style.border = "3px solid red";
}

function fullNameValidation() {
  if(/^\s*$/.test(fullName.value)){
    invalid(fullName, fullNameText, "Required");
    return false;
  } else if(/^[a-zA-Z ]+$/.test(fullName.value)){
    valid(fullName, fullNameText, "Looks good");
    return true;
  } else {
    invalid(fullName, fullNameText, "Invalid");
    return false;
  }
}

function userIDValidation() {
  if(/^\s*$/.test(userID.value)){
    invalid(userID, userIDText, "Required");
    return false;
  } else if(/^[A-Z]{1}.{3,10}[^a-zA-Z]{1}$/.test(userID.value)){
    valid(userID, userIDText, "Looks good");
    return true;
  } else {
    invalid(userID, userIDText, "Invalid");
    // invalid(userID, userIDText, "Invalid, Starts with Capital, ends with special character or number and 5-12 characters long");
    return false;
  }
}

function countryValidation() {
  if(/^\s*$/.test(country.value)){
    invalid(country, countryText, "Required");
    return false;
  } else if(/^[a-zA-Z]+$/.test(country.value)){
    valid(country, countryText, "Looks good");
    return true;
  } else {
    invalid(country, countryText, "Invalid");
    return false;
  }
}

function zipCodeValidation() {
  if(/^\s*$/.test(zipCode.value)){
    invalid(zipCode, zipCodeText, "Required");
    return false;
  } else if(/[0-9]{4}\s*[a-zA-Z]{2}$/.test(zipCode.value)){
    valid(zipCode, zipCodeText, "Looks good");
    return true;
  } else {
    invalid(zipCode, zipCodeText, "Invalid");
    return false;
  }
}

function languageValidation(){
  if(/^\s*$/.test(language.value)){
    invalid(language, languageText, "Required");
    return false;
  } else if(/^[a-zA-Z]+$/.test(language.value)){
    valid(language, languageText, "Looks good");
    return true;
  } else {
    invalid(language, languageText, "Invalid");
    return false;
  }
}

function emailValidation(){
  if(/^\s*$/.test(email.value)){
    invalid(email, emailText, "Required");
    return false;
  } else if(/^[a-zA-Z0-9]+([\_\.\-]?[a-zA-Z0-9])*@[a-zA-Z0-9]+([\_\.\-]?[a-zA-Z0-9])*\.[a-zA-Z]{2,}$/.test(email.value)){
    valid(email, emailText, "Looks good");
    return true;
  } else {
    invalid(email, emailText, "Invalid");
    return false;
  }
}

function passwordValidation(){
  if(/^\s*$/.test(password.value)){
    invalid(password, passwordText, "Required");
    return false;
  } else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{12,}$/.test(password.value) && password.value.length<14){
    passwordText.textContent = "Weak, could be better";
    passwordText.style.color = "orange";
    password.style.border = "3px solid orange";
    return true;
  } else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{12,}$/.test(password.value) && password.value.length>=14){
    valid(password, passwordText, "Looks good");
    return true;
  } else {
    invalid(password, passwordText, "Bad");
    return false;
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if(fullNameValidation() & userIDValidation() & countryValidation() & zipCodeValidation() 
    & languageValidation() & emailValidation() & passwordValidation()){
      console.log("hey");
      alert(`You are all setup!
            Fullname: ${fullName.value}
            UserID: ${userID.value}
            Address: ${address.value}
            Country: ${country.value}
            Zip code: ${zipCode.value}
            Language: ${language.value}
            Bio: ${bio.value}
            Gender: ${gender.value}
            Email: ${email.value}
            Password: ${password.value}
      `);
  }
});