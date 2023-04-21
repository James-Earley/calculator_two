Calculator App Documentation
----------------------------

This is a simple calculator app built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

### Usage

To use the calculator, simply click on the buttons to input numbers and operators. The current calculation will be displayed in the calculator display. To perform the calculation, click on the equals button.

### Elements

The app uses several elements which are retrieved using JavaScript DOM methods:

-   `display`: represents the calculator display where the calculation is shown
-   `buttons`: represents the container for all the calculator buttons
-   `clearButton`: represents the clear button which resets the display and any previous calculation
-   `equalsButton`: represents the equals button which performs the calculation

### Object Containing Operations

The `operations` object contains functions that perform arithmetic operations. The object is used in the `operate()` function to determine which operation to perform.

### Variables

The app uses several variables:

-   `firstOperator`: stores the first operator in the calculation
-   `firstOperand`: stores the first operand in the calculation
-   `result`: stores the result of the calculation

### Event Listeners

The app uses several event listeners to respond to user input:

-   `buttons`: listens for clicks on the calculator buttons and calls the `handleButtonClick()` function
-   `clearButton`: listens for clicks on the clear button and calls the `clearDisplay()` function
-   `equalsButton`: listens for clicks on the equals button and calls the `operate()` function

### Functions

The app uses several functions:

-   `handleButtonClick()`: appends the clicked button value to the display or sets the operator depending on the button class
-   `appendToDisplay()`: appends a number to the display and checks if the previous calculation has been made and resets the display if needed
-   `setOperator()`: sets the operator, stores the current display value as the first operand, and clears the display
-   `clearDisplay()`: clears the display and resets the operator and operand variables
-   `operate()`: performs the calculation based on the stored operator and operands, checks for division by zero, and displays the result
