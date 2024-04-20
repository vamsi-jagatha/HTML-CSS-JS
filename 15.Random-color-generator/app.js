let backgroundContainer = document.getElementById('backgroundContainer');
let hexCode = document.getElementById("hexCode");
let opacitySlider = document.getElementById('range');
let opacityDisplayValue = document.getElementById('opacityValue');
function opacityChange() {
    let opacityValue = opacitySlider.value;
    opacityDisplayValue.textContent = opacityValue;
    let backgroundContainer = document.getElementById('backgroundContainer');
    backgroundContainer.style.opacity = opacityValue;
}
opacitySlider.onclick = function() {
    opacityChange();
};


function changeBackground() {
    let randomNumber = Math.floor(Math.random() * 16777215); //Multiply Math.random() by 16777215 to ensure the generated number falls within the range of valid hexadecimal values (from 000000 to FFFFFF)
    let hexCodeValue = "#" + randomNumber.toString(16); //toString() method in JavaScript with the radix parameter to convert a number to a hexadecimal (hex) code.
    backgroundContainer.style.backgroundColor = hexCodeValue;
    hexCode.textContent = hexCodeValue;
}
let buttonELement = document.getElementById('button');
buttonELement.onclick = function() {
    changeBackground();
};

changeBackground();
