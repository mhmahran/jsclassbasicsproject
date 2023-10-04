class NumberGuessingGame {
  constructor(maxAttempts, minRange, maxRange) {
    this.maxAttempts = maxAttempts;
    this.minRange = minRange;
    this.maxRange = maxRange;
    this.secretNumber = this.generateSecretNumber();
  }

  generateSecretNumber() {
    return Math.floor(Math.random() * (this.maxRange - this.minRange + 1)) + this.minRange;
  }

  play() {
    let attempts = 0;
    let guess = NaN;

    while (attempts < this.maxAttempts && guess !== this.secretNumber) {
      guess = this.getValidatedGuess();
      attempts++;

      if (guess < this.secretNumber) {
        console.log("Too low!");
      } else if (guess > this.secretNumber) {
        console.log("Too high!");
      }
    }

    if (guess === this.secretNumber) {
      console.log("Congratulations! You guessed the correct number.");
    } else {
      console.log(`Game over! The secret number was ${this.secretNumber}.`);
    }
  }

  getValidatedGuess() {
    let guess = NaN;
    while (isNaN(guess) || guess < this.minRange || guess > this.maxRange) {
      guess = parseInt(prompt(`Enter your guess (${this.minRange}-${this.maxRange}):`), 10);
      if (isNaN(guess)) {
        console.log("Invalid input. Please enter a number.");
      } else if (guess < this.minRange || guess > this.maxRange) {
        console.log(`Your guess must be between ${this.minRange} and ${this.maxRange}.`);
      }
    }
    return guess;
  }
}

// Usage example
const game = new NumberGuessingGame(5, 1, 100);
game.play();
