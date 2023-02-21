let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operation");
let displayElement = document.querySelector(".display");
let operand1 = 0;
let operand2 = 0;
let ans = 0;
let hasOperand = false;
let operation = "";
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
  if (buttonClass[0] != "equal") {
    operation = buttonClass[0];
  }
  if (operation != "clear" && hasOperand) {
    operand2 = innerDisplayValue;
    hasOperand = false
  } else {
    operand1 = innerDisplayValue;
    hasOperand = true;
  }

  console.log(operand1, operation, operand2);
  if (buttonClass[0] == "equal") {
    ans = operate(operation);
  }

  innerDisplayValue = displayValue = ans;
  operand1 = ans;
  ans = 0;
  displayElement.innerHTML = displayValue;
}
function operate(operation) {
  switch (operation) {
    case "add":
      return operand1 + operand2;

      break;
    case "mult":
      return operand1 * operand2;
      break;
    case "divide":
      if (operand2 != 0) {
        return (operand1 / operand2).toPrecision(2);
      } else return "-1";
      break;
    case "minus":
      return operand1 - operand2;
      break;
  }
  console.log(operand1);
}
function numberClicked(buttonClass) {
  if (buttonClass[1] == "number") displayValue += buttonClass[0];
  innerDisplayValue = Number(displayValue);
  displayValue = String(innerDisplayValue); // used to get rid of the leading zero 
  displayElement.innerHTML = displayValue;
}
