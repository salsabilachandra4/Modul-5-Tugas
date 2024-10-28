let displayValue = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue || ' '; 
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '' || /[+\-*/]$/.test(displayValue)) {
        return; 
    }
    displayValue += operator;
    updateDisplay();
}

function calculateResult() {
    if (displayValue === '' || !/\d/.test(displayValue)) {
        alert('Isilah angka terlebih dahulu sebelum menghitung!');
        return;
    }

    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}