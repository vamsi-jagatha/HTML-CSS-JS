let gameResult = document.getElementById('resultId');
let userInput = document.getElementById('userInput');
let randomNumber = Math.ceil(Math.random() * 100);

function input() {
    gameResult.style.display = "none";
}

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    gameResult.style.display = "block";
    if (guessedNumber > randomNumber) {
        gameResult.style.background = "blue";
        gameResult.textContent = "Too High! Try again";
        gameResult.style.color = "white";
    } else if (guessedNumber < randomNumber) {
        gameResult.style.background = "orange";
        gameResult.textContent = "Too Low! Try again";
        gameResult.style.color = "white";

    } else if (randomNumber === guessedNumber) {
        gameResult.style.background = "green";
        gameResult.textContent = "Congratulations! You made it.";
        gameResult.style.color = "white";
    } else {
        gameResult.textContent = "please provide a valid input";
        gameResult.style.color = "white";
    }
}