function operate(a, b, operation) {
	a = Number(a);
	b = Number(b);

	switch(operation) {
		case "+":
			return a + b;
			break;
		case "-":
			return a - b;
			break;
		case "*":
			return a * b;
			break;
		case "/":
			return a / b;
			break;
	}
}

function updateDisplay() {
	display.innerHTML = "";
	if(firstOperand !== null) display.innerHTML += firstOperand;
	if(currentOperator !== null) display.innerHTML += " " + currentOperator;
	if(secondOperand !== null) display.innerHTML += " " + secondOperand;
}

function initOperator(documentId, operatorSymbol) {
	document.getElementById(documentId).addEventListener("click", () => { 
		if(firstOperand === null) { 
			return;
		} 

		if(secondOperand !== null) {
			resolveCalculation();
		}

		currentOperator = operatorSymbol;
		updateDisplay();
	});
}

function clearData() {
	firstOperand = null;
	secondOperand = null;
	currentOperator = null;
}

function clearDisplay() {
	clearData();
	updateDisplay();
}

function resolveCalculation() {
	if(firstOperand === null || currentOperator === null || secondOperand === null) {
		return;
	}

	const results = operate(firstOperand, secondOperand, currentOperator);
	clearData();
	firstOperand = results;
}

function init() {
	// Setup event listeners
	initOperator("add", "+");
	initOperator("subtract", "-");
	initOperator("multiply", "*");
	initOperator("divide", "/");

	document.getElementById("clear").addEventListener("click", () => {
		clearDisplay();
	});

	document.getElementById("equals").addEventListener("click", () => {
		resolveCalculation();
		updateDisplay();
	});

	for(const numberElement of document.querySelectorAll(".num")) {
		const number = numberElement.dataset.num; 
		numberElement.addEventListener("click", () => {
			if(firstOperand === null) {
				firstOperand = number;
			} else {
				if(currentOperator === null) {
					firstOperand += number;
				} else {
					if(secondOperand === null) {
						secondOperand = number;
					} else {
						secondOperand += number;
					}
				}
			}

			updateDisplay();
		});
	}
}

console.log("Version 2: Possible Optimizations");
const display = document.getElementById("display-text"); 
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
init();
