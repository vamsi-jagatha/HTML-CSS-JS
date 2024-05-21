const startBtn = document.getElementById('startBtn');
let inputMin = document.getElementById('inputMin');
let inputSec = document.getElementById('inputSec');
const workBtn=document.getElementById('workBtn');
const breakBtn=document.getElementById('breakBtn');
const resetBtn=document.getElementById('reset');
const alarmSound = document.getElementById('alarmSound');

// Function to add a leading zero if the number is a single digit
function formatWithLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

// Timer function to handle the countdown logic
function fixedtimerFunction(){
    inputMin.value="25";
    inputSec.value="00";
}

function breaktimerFunction(){
    inputMin.value="05";
    inputSec.value="00";
}

function timerFunction() {
    let minuteCount = parseInt(inputMin.value);
    let secondCount = parseInt(inputSec.value);

    if (minuteCount >= 0 && secondCount >= 0) {
        const interval = setInterval(() => {
            if (secondCount === 0) {
                if (minuteCount === 0) {
                    clearInterval(interval);
                    alarmSound.play();
                } else {
                    minuteCount -= 1;
                    secondCount = 59;
                }
            } else {
                secondCount -= 1;
            }

            // Update the input fields dynamically
            inputMin.value = formatWithLeadingZero(minuteCount);
            inputSec.value = formatWithLeadingZero(secondCount);

        }, 1000);
    }
}


resetBtn.addEventListener('click',function(){
    inputMin.value="00";
    inputSec.value="00";
});

// Attach the timer function to the start button click event
startBtn.addEventListener('click', timerFunction);
workBtn.addEventListener('click',fixedtimerFunction);
breakBtn.addEventListener('click',breaktimerFunction);