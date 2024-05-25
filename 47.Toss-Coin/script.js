let coinFace=document.getElementById('coinFace');
let result=document.getElementById('result');
let tossBtn=document.getElementById('tossBtn');


let randomNumber=()=>((Math.random()));

tossBtn.addEventListener('click',()=>{
    coinFace.classList.add('flip');    
    tossBtn.disabled=true;

    if (randomNumber()<0.5){
        coinFace.src="images/heads.png";
        setTimeout(function(){
            result.textContent="TOSS:HEADS";
        },1000)
    }else {
            coinFace.src="images/tails.png";
            setTimeout(function(){
                result.textContent="TOSS:TAILS";
            },1000)
    }


    setTimeout(()=>{
        coinFace.classList.remove('flip');
        tossBtn.disabled=false;
    },1500)
    
});


