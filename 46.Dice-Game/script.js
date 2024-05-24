let backgroundEle = document.getElementById('background');

let containerEle = document.createElement('div');
containerEle.classList.add('container');
backgroundEle.appendChild(containerEle);

let headingEle = document.createElement('h1');
headingEle.classList.add('main-heading');
headingEle.textContent = "Dice Game";
containerEle.appendChild(headingEle);

let displayTextContainer=document.createElement('div');
displayTextContainer.classList.add('display-text-container');
containerEle.appendChild(displayTextContainer);

let displayTextEle = document.createElement('h3');
displayTextEle.textContent = "Let's Play";
displayTextEle.classList.add('display-text');
displayTextContainer.appendChild(displayTextEle);

let playerNameContainer = document.createElement('div');
playerNameContainer.classList.add('player-container');
containerEle.appendChild(playerNameContainer);

let playerOne = document.createElement('h3');
playerOne.textContent = "Player A";
playerNameContainer.appendChild(playerOne);

let playerTwo = document.createElement('h3');
playerTwo.textContent = "Player B";
playerNameContainer.appendChild(playerTwo);

let imageContainerEle = document.createElement('div');
imageContainerEle.classList.add('img-container');
containerEle.appendChild(imageContainerEle);

let diceOne = document.createElement('img');
diceOne.src = "images/dice1.png";
diceOne.classList.add('dice-img');
imageContainerEle.appendChild(diceOne);

let diceTwo = document.createElement('img');
diceTwo.src = "images/dice2.png";
diceTwo.classList.add('dice-img');
imageContainerEle.appendChild(diceTwo);

let scoreContainer = document.createElement('div');
scoreContainer.classList.add('score-container');
containerEle.appendChild(scoreContainer);

let scoreOne = document.createElement('h3');
scoreOne.textContent = "Score: 0";
scoreContainer.appendChild(scoreOne);

let scoreTwo = document.createElement('h3');
scoreTwo.textContent = "Score: 0";
scoreContainer.appendChild(scoreTwo);


let buttonEle = document.createElement('button');
buttonEle.classList.add('button');
buttonEle.textContent = "Play";
containerEle.appendChild(buttonEle);

let editNames = document.createElement('button');
editNames.classList.add('edit-button');
editNames.textContent = "Edit Names";
containerEle.appendChild(editNames);


let scoreA = 0;
let scoreB = 0;

function rollDice() {
    let randomNumber1 = Math.ceil(Math.random() * 6);
    let randomNumber2 = Math.ceil(Math.random() * 6);

    diceOne.src = "images/dice" + randomNumber1 + ".png";
    diceTwo.src = "images/dice" + randomNumber2 + ".png";

    if (randomNumber1 === randomNumber2) {
        displayTextEle.textContent = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        scoreA++;
        displayTextEle.textContent="";
        scoreOne.textContent = "Score: " + scoreA;
        if (scoreA >=3) {
            displayTextEle.textContent = "PlayerA wins!";
            resetScoreA()
            setTimeout(() => {
                window.location="";
           }, 1000);
        }
    } else {
        scoreB++;
        displayTextEle.textContent="";
        scoreTwo.textContent = "Score: " + scoreB;
        if (scoreB >=3) {
            displayTextEle.textContent = "PlayerB wins!";
            resetScoreB()
            setTimeout(() => {
                window.location="";
           }, 1000);
        }
    }
}

function resetScoreB() {
    scoreB=3
    scoreOne.textContent = "Score: " + scoreA;
}
function resetScoreA() {
    scoreA=3;
    scoreTwo.textContent = "Score: " + scoreB;
}

buttonEle.addEventListener('click', () => {
    rollDice();
});

editNames.addEventListener('click', () => {
    let playerOneName = prompt("Change Player 1 Name");
    let playerTwoName = prompt("Change Player 2 Name");
    if (playerOneName) playerOne.textContent = playerOneName;
    if (playerTwoName) playerTwo.textContent = playerTwoName;
});
