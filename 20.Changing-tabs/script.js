let aboutButtonElement = document.getElementById('aboutButton');
let timeToVisitButtonElement = document.getElementById('timeToVisitButton');
let attractionsButtonElement = document.getElementById('attractionsButton');

let aboutTabElement = document.getElementById('aboutTab');
let timeToVisitTabElement = document.getElementById('timeToVisitTab');
let attractionsTabElement = document.getElementById('attractionsTab');


aboutButtonElement.style.backgroundColor = "white";

function onClickAbout() {
    aboutButtonElement.style.backgroundColor = "white";
    aboutButtonElement.style.outline = "none";
    timeToVisitButtonElement.style.backgroundColor = "";
    attractionsButtonElement.style.backgroundColor = "";
    aboutTabElement.classList.remove("d-none");
    attractionsTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.add('d-none');



}

function onClickTimeToVisit() {
    aboutButtonElement.style.backgroundColor = "";
    timeToVisitButtonElement.style.backgroundColor = "white";
    timeToVisitButtonElement.style.outline = "none";
    attractionsButtonElement.style.backgroundColor = "";
    timeToVisitTabElement.classList.remove("d-none");
    aboutTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");


}

function onClickAttractions() {
    aboutButtonElement.style.backgroundColor = "";
    timeToVisitButtonElement.style.backgroundColor = "";
    attractionsButtonElement.style.backgroundColor = "white";
    attractionsButtonElement.style.outline = "none";
    attractionsTabElement.classList.remove("d-none");
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.add("d-none");

}