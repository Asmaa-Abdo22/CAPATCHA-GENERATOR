//*---------------- HTML Elements---------
var spanText = document.getElementById("captchaText");
var tryBtn = document.getElementById("try");
var checkBtn = document.getElementById("check");
var input = document.getElementById("input");

//*----------------GLOBAL VARIABLES-------
var chars;
var correct = "";
//*----------------FUNCTIONS--------------
// &----FIRST FUNCTION----
function generateCAPTCHA() {
  var ran = "";
  chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ];
  for (var i = 0; i < 6; i++) {
    ran += chars[Math.floor(Math.random() * chars.length)];
  }
  spanText.innerHTML = ran;
  correct = ran;
}

generateCAPTCHA();

tryBtn.onclick = generateCAPTCHA;
// &----SECOND FUNCTION----
function checkAnswer() {
  if (input.value === correct) {
    alert("Well Done");
  } else {
    alert("Sorry, Try Again :) ");
  }
}
checkBtn.onclick = checkAnswer;
