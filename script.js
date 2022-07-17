function operate(a, b, operation) {
	switch(operation) {
		case "add":
			return a + b;
			break;
		case "subtract":
			return a - b;
			break;
		case "multiply":
			return a * b;
			break;
		case "divide":
			return a / b;
			break;
	}
}
