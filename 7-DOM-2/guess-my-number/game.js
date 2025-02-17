//Save the buttons as constants
const messageParagraph = document.querySelector("#message");

const guessButton = document.querySelector("#guess-button");

const userInput = document.querySelector("#userGuess");

const resetButton = document.querySelector("#reset");

const highScoreStatus = document.querySelector("#highScoreStatus")
//Add an eventListener that takes input from the input field
//Print something to the console

//Make a random number between 1-5
let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log("Random number: ", randomNumber);

let highScore = 0;
let currentScore = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//Returns a random number between 1-5
//function generateNumber(){
//    return Math.floor(Math.random() * 5) + 1;
//}

resetButton.addEventListener("click", () => {

    randomNumber = generateRandomNumber();
    console.log("New random number: ", randomNumber);

    currentScore = 0;
    messageParagraph.textContent = "Game reset. Start guessing!";

    highScoreStatus.textContent = highScore;
    userInput.value = "";
    messageParagraph.className = "";
});

guessButton.addEventListener("click", () => {
    let userGuess = parseInt(userInput.value)

    if (isNaN(userGuess) || userGuess < 1 || userGuess >5) {
        messageParagraph.textContent = "Please enter a number between 1 and 5!";
        return;
    }

    if (userGuess === randomNumber) {
        console.log("You guessed right!");
        messageParagraph.textContent = "You guessed right!! 🎉"

        currentScore += 1;

        if(currentScore > highScore) {
            highScore = currentScore;
            highScoreStatus.textContent = highScore;
        }

        messageParagraph.className = `high-score-${highScore}`;

        randomNumber = generateRandomNumber();
        console.log("New random number: ", randomNumber);

        userInput.value = "";
    } else  {
        console.log("You guessed wrong.")
        messageParagraph.textContent = "You guessed wrong... ❌"
        currentScore = 0;
    }
})



