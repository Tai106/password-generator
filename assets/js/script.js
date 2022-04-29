const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '123456789';
const specialCharacters = '!@#$%^&*_-+=';
const storePassword = "generated password";
const passLength = 0;
const password = "";
const allCharacters = "";

var createPass = function () {
  allCharacters = "";
  password = "";
  passLength = 0;

  while (passLength < 8 || passLength > 128) {
    passLength = window.prompt(
      "Please type a number between 8 and 128 for your password length"
    );
  }

  const lowercaseConfirm = window.confirm("Would you like lowercase letters in your passwor? Click Ok if yes")
  const uppercaseConfirm = window.confirm("Would you like uppercase letters in your password? Click OK if yes");
  const numbersConfirm = window.confirm("Would you like numbers in your password? Click OK if yes");
  const specialConfirm = window.confirm("Would you like special characters in your password? Click OK if yes");

  if (lowercaseConfirm) {
    allCharacters += lowercase;
  };
  if (uppercaseConfirm) {
    allCharacters += uppercase;
  };
  if (numbersConfirm) {
    allCharacters += numbers;
  };
  if (specialConfirm) {
    allCharacters += specialCharacters;
  };

  console.log(allCharacters);

}

function generatePassword() {
  createPass();
  for (let i = 1; i <= passLength; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacters.length)
    password += allCharacters[randomNumber];
  }
  return password;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);