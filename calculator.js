class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero!";
        }
        return a / b;
    }
}

class Menu {
    constructor() {
        this.operations = <
            { symbol: '+', name: 'Addition' },
            { symbol: '-', name: 'Subtraction' },
            { symbol: '*', name: 'Multiplication' },
            { symbol: '/', name: 'Division' },
            { symbol: 'exit', name: 'Exit' },
        >;
    }

    show() {
        console.log("Welcome to Simple Calculator!");
        this.operations.forEach((operation, index) => {
            console.log(`${index + 1}. ${operation.name} (${operation.symbol})`);
        });
    }

    getUserChoice() {
        const choice = parseInt(prompt("Enter your choice:"));
        return choice;
    }

    isValidChoice(choice) {
        return choice >= 1 && choice <= this.operations.length;
    }

    performCalculation(calculator, operation) {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));

        switch (operation) {
            case 1:
                console.log(`Result: ${calculator.add(num1, num2)}`);
                break;
            case 2:
                console.log(`Result: ${calculator.subtract(num1, num2)}`);
                break;
            case 3:
                console.log(`Result: ${calculator.multiply(num1, num2)}`);
                break;
            case 4:
                console.log(`Result: ${calculator.divide(num1, num2)}`);
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }

    run(calculator) {
        while (true) {
            this.show();
            const choice = this.getUserChoice();

            if (choice === this.operations.length) {
                console.log("Goodbye!");
                break;
            } else if (this.isValidChoice(choice)) {
                this.performCalculation(calculator, choice);
            } else {
                console.log("Invalid choice. Please try again.");
            }
        }
    }
}

const calculator = new Calculator();
const menu = new Menu();
menu.run(calculator);
