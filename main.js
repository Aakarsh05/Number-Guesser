let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click", function () {
  let input = document.getElementById("userinput").value;
  if (input == number) {
    output.innerHTML = " You guessed right ,the number was " + number;
  } else if (input < number) {
    output.innerHTML = " You guessed too low!";
  }
  else if ( input + 20 > number && input < number ){
    output.innerHTML = "The guessed number is little low";
  }
  else if ( input - 20 < number && input > number ){
    output.innerHTML = "The guessed number is little high";
  }
  if (input > number) {
    output.innerHTML = "You gussed too high!";
  }
});
