const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.querySelector(".one");
let passwordTwo = document.querySelector(".two");

let selection = document.getElementById("password-length");
const mainButton = document.querySelector(".main-btn");

const copyPassOneButton = document.querySelector(".copy-one");
const copyPassTwoButton = document.querySelector(".copy-two");
const message = document.getElementById("messageDisplay");

mainButton.addEventListener("click", function() {
  let numCharacters = selection.value;
  console.log(numCharacters);
  let num = 0;

  if (numCharacters === "eight") {
    num = 8;
  } else if (numCharacters === "ten") {
    num = 10;
  } else if (numCharacters === "twelve") {
    num = 12;
  } else if (numCharacters === "fifteen") {
    num = 15;
  }
  numCharacters = "";
  generatePasswords(num);
  num = 0;
});

copyPassOneButton.addEventListener("click", function () {
  navigator.clipboard.writeText(one);
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
});

copyPassTwoButton.addEventListener("click", function() {
  navigator.clipboard.writeText(two);
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 3000);                                                                                                                                                   
});


function generatePasswords(num) {
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
  let one = "";
  let two = "";
  
  for (let i=1; i <= num; i++) {
    let random1 = Math.floor(Math.random() * characters.length);
    let random2 = Math.floor(Math.random() * characters.length);
    one += characters[random1];
    two += characters[random2];
  }

  passwordOne.textContent = one;
  passwordTwo.textContent = two;
  
}
