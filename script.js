let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operation");
let displayElement = document.querySelector(".display");
let operand1 = 0;
let operand2 = 0;
let opeartion = "";
let innerDisplayValue = 0;
let displayValue = String(innerDisplayValue);


operationButtons.forEach(function (button) {
  button.addEventListener(
    "click",
    operationClicked.bind(null, button.classList)
  );
});

numberButtons.forEach(function (button) {
  button.addEventListener("click", numberClicked.bind(null, button.classList));
});

function operationClicked(buttonClass) {
  let operation = buttonClass[0];
  if (operation != "clear") operand1 = innerDisplayValue;
  console.log(operation);
  innerDisplayValue = 0;
  displayValue = 0;
  displayElement.innerHTML = displayValue;
}

function numberClicked(buttonClass) {
  if (buttonClass[1] == "number") displayValue += buttonClass[0];
  innerDisplayValue = Number(displayValue);
  displayValue = String(innerDisplayValue);
  displayElement.innerHTML = displayValue;
}
