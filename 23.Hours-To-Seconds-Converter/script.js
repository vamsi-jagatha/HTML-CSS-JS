
let inputHours = document.getElementById('hoursInput');
let inputMinutes = document.getElementById('minutesInput');

let convertBtn = document.getElementById('convertBtn');

let errorMsg = document.getElementById('errorMsg');
let timeInSeconds = document.getElementById('timeInSeconds');


convertBtn.addEventListener('click', function() {
    let inputHoursValue = inputHours.value;
    let inputMinutesValue = inputMinutes.value;
    if (parseInt(inputHours.value) > 0 && parseInt(inputMinutes.value) > 0) {
        timeInSeconds.textContent = parseInt(inputHours.value) * 3600 + parseInt(inputMinutes.value) * 60 + "s";
        timeInSeconds.style.border = "1px solid #fff";
        errorMsg.textContent = "";
    } else if (inputHoursValue === "") {
        errorMsg.textContent = "Please enter a valid number of hours.";
    } else if (inputMinutesValue === "") {
        errorMsg.textContent = "Please enter a valid number of minutes.";
    } else if (inputHoursValue === "" && inputMinutesValue === "") {
        errorMsg.textContent = "Please enter a valid number of hours.";

    }
})