let adviseEl = document.getElementById('advise');
let genBtn = document.getElementById('generateBtn');
let resBtn = document.getElementById('resetBtn');
let idNum = document.getElementById('num');
let idNumSm = document.getElementById('numSm');
let spinnerEl = document.getElementById('spinner');

resBtn.addEventListener("click", function() {
    adviseEl.textContent = "";
    idNum.textContent = "";
    idNumSm.textContent = "";
});
genBtn.addEventListener('click', function() {
    let url = "https://api.adviceslip.com/advice";
    let requestConfig = {
        method: "GET"
    };
    spinnerEl.classList.remove('d-none');
    fetch(url, requestConfig)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add('d-none');
            adviseEl.textContent = jsonData.slip.advice;
            idNum.textContent = " - #" + jsonData.slip.id;
            idNumSm.textContent = " - #" + jsonData.slip.id;
        });
});