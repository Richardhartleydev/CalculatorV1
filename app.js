//display
let display = document.querySelector(".div1");

//query select my buttons
const buttons = document.querySelectorAll("button");

//make an array of all pressed buttons
let calculation = [];
let addedCalc;

//get the button textcontent and push into array
function calculate(button) {
  const value = button.textContent;

  //clear logic
  if (value === "C") {
    calculation = [];
    display.textContent = "";
  }
  //result logic
  else if (value === "=") {
    display.textContent = eval(addedCalc);
  }
  //display numbers on screen + continue
  else {
    calculation.push(value);
    addedCalc = calculation.join("");
    display.textContent = addedCalc;
  }

  console.log(calculation);
}

buttons.forEach(button =>
  button.addEventListener("click", () => calculate(button))
);
