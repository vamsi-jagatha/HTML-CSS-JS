let button=document.querySelector('.button');
let img=document.querySelector('.image');
let userInput=document.querySelector('.user-input');


userInput.addEventListener('input',(event)=>{
    userInputValue=userInput.value;
    console.log(userInputValue);
    button.addEventListener('click',()=>{
        img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+userInputValue;
        console.log(img.src)
    });
})
