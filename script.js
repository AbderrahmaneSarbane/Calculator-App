// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Select the display element
    const result = document.querySelector('.result span');
    // Initialize variables to store current number, first operand, and operator
    let currentNumber = '0';
    let firstOperand = null;
    let operator = null;
    
    // Function to update the display
    function updateDisplay() {
        result.textContent = currentNumber;
    }
    
    // Function to reset the calculator
    function clear() {
        currentNumber = '0';
        firstOperand = null;
        operator = null;
        updateDisplay();
    }
    
    // Function to handle number button clicks
    function inputNumber(number) {
        // Concatenate the clicked number to the current number being displayed
        if (currentNumber === '0') {
            currentNumber = number.toString();
        } else {
            currentNumber += number.toString();
        }
        updateDisplay();
    }
    
    // Function to handle operator button clicks
    function inputOperator(op) {
        // Perform calculation if an operator is already selected
        if (operator !== null) {
            calculate();
        }
        // Store the current number as the first operand and store the operator
        firstOperand = parseFloat(currentNumber);
        operator = op;
        currentNumber = '';
    }
    
    // Function to perform calculation
    function calculate() {
        // Convert the current number to a floating point number
        const secondOperand = parseFloat(currentNumber);
        // Perform calculation based on the operator
        if (operator === '+') {
            currentNumber = (firstOperand + secondOperand).toString();
        } else if (operator === '-') {
            currentNumber = (firstOperand - secondOperand).toString();
        } else if (operator === 'x') {
            currentNumber = (firstOperand * secondOperand).toString();
        } else if (operator === '/') {
            currentNumber = (firstOperand / secondOperand).toString();
        } else if (operator == '%') {
            currentNumber = (firstOperand / 100).toString();
        } else if (operator == '+/-') {
            currentNumber = (firstOperand * -1).toString();
        }
        // Store the result as the new first operand and reset the operator
        firstOperand = parseFloat(currentNumber);
        operator = null;
    }
    
    // Event listeners for number buttons
    document.querySelectorAll('.numbers').forEach(button => {
        button.addEventListener('click', () => {
            inputNumber(button.textContent);
        });
    });
    
    // Event listeners for operator buttons
    document.querySelectorAll('.sign').forEach(button => {
        button.addEventListener('click', () => {
            inputOperator(button.textContent);
        });
    });
    
    // Event listener for the equals button
    document.querySelector('.equals').addEventListener('click', () => {
        // Perform calculation and update display
        calculate();
        updateDisplay();
    });
    
    // Event listener for the clear button
    document.querySelector('.clear').addEventListener('click', () => {
        // Clear the calculator
        clear();
    });
});