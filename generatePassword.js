function generatePassword() {
  let password = "";
  let fonArray = [lowerCaseLetter(), upperCaseLetter()];
  password += symbol();
  password += number();
  password += lowerCaseLetter();
  password += number();
  password += upperCaseLetter();
  password += symbol();
  password += number();
  for (let i = 0; i < 3; i++) {
    password += fonArray[Math.floor(Math.random() * fonArray.length)];
  }
  password = shuffle(password);
  document.getElementsByClassName("sifre")[0].innerHTML = password;
}
function lowerCaseLetter() {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let randomNumber = Math.floor(Math.random() * lowerCaseLetters.length);
  return lowerCaseLetters[randomNumber];
}

function upperCaseLetter() {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomNumber = Math.floor(Math.random() * upperCaseLetters.length);
  return upperCaseLetters[randomNumber];
}

function number() {
  const number = "0123456789";
  let randomNumber = Math.floor(Math.random() * number.length);
  return number[randomNumber];
}

function symbol() {
  const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  let randomNumber = Math.floor(Math.random() * symbols.length);
  return symbols[randomNumber];
}
function shuffle(s) {
  for (var i = 0; i < s.length - 1; ++i) {
    var j = Math.floor(Math.random() * s.length);

    var temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  return s;
}
