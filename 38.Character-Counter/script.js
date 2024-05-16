const  userInputArea=document.getElementById('userInputArea');
let noOfChracters=document.getElementById('noOfCharacters');
let noOfWords=document.getElementById('noOfWords');
let noOfSpaces=document.getElementById('noOfSpaces');


let spacesCount=0;
let CharactersCount=0;
userInputArea.addEventListener('input',function(event){
    let userInputText=userInputArea.value;

    noOfChracters.textContent=userInputText.length;
    noOfWords.textContent=userInputText.trim().split(" ").length;
    noOfSpaces.textContent=userInputText.split(" ").length-1;

});
