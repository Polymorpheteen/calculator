let currentInput = "";
let storedNumber = null;
let selectedOperator = null;
let resultDisplayed = false;

const display = document.getElementById("display");

function updateDisplay() {
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  storedNumber = null;
  selectedOperator = null;
  resultDisplayed = false;
  updateDisplay();
}

function appendDigit(digit) {
  if (resultDisplayed) {
    currentInput = "";
    resultDisplayed = false;
  }

  if (digit === "." && currentInput.includes(".")) return;

  currentInput += digit;
  updateDisplay();
}

function chooseOperator(operator) {
  if (currentInput === "") return;

  storedNumber = parseFloat(currentInput);
  selectedOperator = operator;
  currentInput = "";
  updateDisplay();
}

function calculate() {
  if (
    currentInput === "" ||
    storedNumber === null ||
    selectedOperator === null
  ) {
    return;
  }

  const secondNumber = parseFloat(currentInput);
  let result;

  switch (selectedOperator) {
    case "+":
      result = add(storedNumber, secondNumber);
      break;
    case "-":
      result = substract(storedNumber, secondNumber);
      break;
    case "*":
      result = multiply(storedNumber, secondNumber);
      break;
    case "/":
      result = divide(storedNumber, secondNumber);
      break;
    default:
      result = "Error";
  }

  display.value = result;
  currentInput = result.toString();
  storedNumber = null;
  selectedOperator = null;
  resultDisplayed = true;
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b === 0 ? "Error" : a / b;
}
