let quoteDisplay = document.getElementById('quoteDisplay');
let timer = document.getElementById('timer');
let userInput = document.getElementById('userInput');
let displayResult = document.getElementById('displayResult');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let spinner =document.getElementById('spinner');
let WPM=document.getElementById('WPM');
let counter = null;
let intervalId=null;


function setTimer() {
    displayResult.textContent="";
    // setting the timer 
    counter = 60;
     clearInterval(intervalId);
    intervalId = setInterval(function() {
        counter = counter - 1;
        timer.textContent = counter;
        if (counter === 0) {
            clearInterval(intervalId);
            displayResult.textContent = "Time's up!";
            startBtn.removeEventListener('click');
        }
    }, 1000);

    userInput.addEventListener('input', function(event) {
        let userInputValue = userInput.value;
        if (userInputValue === quoteDisplay.textContent) {
            clearInterval(intervalId);
            displayResult.textContent = "Hey! You've made with in time.";
           
        }
       
    });
}

// adding eventListener to the button
startBtn.addEventListener('click', setTimer);

resetBtn.addEventListener('click', function() {
    location.reload();
})

// making a HTTP request
let url = "https://api.quotable.io/random?minLength=100&maxLength=140";
let options = {
    method: "GET"
}
spinner.classList.remove('d-none');
fetch(url, options)
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    spinner.classList.add('d-none');
    quoteDisplay.textContent = jsonData.content;
    
});














