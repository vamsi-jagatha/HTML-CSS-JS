let background=document.getElementById('background');
let userInput=document.getElementById('userInput');
let button=document.getElementById('button');


button.addEventListener('click',function(){
    if (userInput.value!==""){
        let word=document.createElement('span');
        let fontSizeChanging=Math.floor(Math.random()*99);
        let fontWeightChanging=Math.ceil(Math.random()*9);
        let randHexCode=Math.floor(Math.random()*16777215);
        let hexCode="#"+randHexCode.toString(16);
        let userValue=userInput.value;
        word.textContent=userValue;
        word.style.color=hexCode;
        word.style.margin="10px";
        word.style.fontWeight=fontWeightChanging*100;
        word.style.fontSize=fontSizeChanging+"px";
        word.style.fontFamily="sans-serif";
        background.appendChild(word);
        userInput.value="";
    }


});


