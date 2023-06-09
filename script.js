/// grab the elements 
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

/// Object containing operations 
const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

/// the variables 
let firstOperator = null;
let firstOperand = null;
let result;

/// event listeners 

buttons.addEventListener("click", handleButtonClick);
clearButton.addEventListener("click", clearDisplay);
equalsButton.addEventListener("click", operate);

// default display values 
display.value = 0;


// event handler for button pushes (add operand updaters)
function handleButtonClick(event) {
  const button = event.target;
  if (button.classList.contains("number")) {
    appendToDisplay(button.getAttribute("data-number"));
  } else if (button.classList.contains("operator")) {
    setOperator(button.getAttribute("data-operator"));
  }
}

// appends number to display and checks to see if previous operation has been made and resets display
function appendToDisplay(number) {
      if (result !== undefined) {
        result = undefined;
        display.value = "";
      } if (result === undefined && display.value === "0") {
        display.value = number;
      } else {
      display.value += parseFloat(number)}
}

// sets the operator, places the present display value into firstOperand and then empties the display
function setOperator(operator) {
    if (firstOperator !== null) {operate();}
    firstOperator = operator;
    firstOperand = display.value;
    display.value = "";
}

/// clears the dsiplay 
function clearDisplay (event) {
    display.value = "";
    firstOperator = null;
    firstOperand = null;
    secondOperator = null;
}

// does the equation 
function operate () {

  console.log(firstOperator);
  console.log(firstOperand);
  console.log(display.value);

  // checks to see if all equaltion elements are present and then converts strings to numbers and to new variables
  if (firstOperator && firstOperand && display.value) {
    const operand1 = parseFloat(firstOperand);
    const operand2 = parseFloat(display.value);

    //checks for /0 and then selects the correct operation by running the firstOperator against the object of operations and passed the rights values into the equation.

    if (operand2 === 0 && firstOperator === "/") {
      display.value = "Pull the other one...";
      firstOperator = null;
      firstOperand = null;
      setTimeout(function () {display.value = "";}, 1000);
    } else {
      firstOperator in operations;
      result = operations[firstOperator](operand1, operand2);
    }
    // if the above operation is run, and result is now defined, the display value is now set to result and the current operator and operand results are nulled to reset them for any further user inputs
    if (result !== undefined) {
      display.value = result;
      firstOperator = null;
      firstOperand = null;
    }
  }
}
