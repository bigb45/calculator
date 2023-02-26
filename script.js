let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operation");
let displayElement = document.querySelector(".display");
let ans = document.querySelector(".ans");
let operand1 = 0;
let operand2 = 0;

let hasOperand = false;
let operation = "";
let displayOperation = "";
let innerDisplayValue = 0;
let displayValue = "0";

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
  hasOperand = true;
  operate(operation);
  displayValue += displayOperation;
  console.log(displayValue);
  displayElement.innerHTML = displayValue;
  equal();
  if (buttonClass[0] == "clear") clear();
}

function operate(operation) {
  switch (operation) {
    case "add":
      displayOperation = "+";
      return operand1 + operand2;
    case "mult":
      displayOperation = "*";
      return operand1 * operand2;
    case "divide":
      displayOperation = "/";
      if (operand2 != 0) {
        if (operand1 % operand2 == 0) return operand1 / operand2;
        else return (operand1 / operand2).toPrecision(2);
      } else if (operand2 == 0) {
        return "err";
      }
    case "minus":
      displayOperation = "-";
      return operand1 - operand2;
  }
  if (operation === "") {
    return operand1;
  }
}
function numberClicked(buttonClass) {
  if (displayValue == "0") displayValue = "";
  if (buttonClass[1] == "number") displayValue += buttonClass[0];
  innerDisplayValue = Number(displayValue);
  // displayValue = String(innerDisplayValue); // used to get rid of the leading zero
  if (hasOperand) {
    evaluate(displayValue);
  }
  displayElement.innerHTML = displayValue;
}

function isNumber(value) {
  if (typeof value === "string") {
    return !isNaN(value);
  }
}
function evaluate(exp) {
  console.log("evaluating..");
  op = exp.split(displayOperation);
  operand1 = Number(op[0]);
  operand2 = Number(op[1]);
  innerDisplayValue = operate(operation);
  if (innerDisplayValue == "err") {
    let main = document.querySelector(".main")
    main.remove()
    let forsaken = document.createElement("a")
    forsaken.innerHTML = "WHAT HAVE YOU BROUGHT UPON US"
    forsaken.classList.add("forsaken")
    document.body.appendChild(forsaken)
  }
  ans.innerHTML = innerDisplayValue;
}

function equal() {
  if (ans.innerHTML != "") {
    displayElement.innerHTML = ans.innerHTML;
    displayValue = ans.innerHTML;
    ans.innerHTML = "";
    // re-animating the button when the 'equal' button is pressed
    displayElement.classList.remove("display");
    void displayElement.offsetWidth;
    displayElement.classList.add("display");
  }
}
function clear() {
  operand1 = operand2 = 0;
  hasOperand = 0;
  innerDisplayValue = 0;
  displayValue = 0;
  operation = "";
  displayElement.innerHTML = 0;

  ans.innerHTML = "";
}
