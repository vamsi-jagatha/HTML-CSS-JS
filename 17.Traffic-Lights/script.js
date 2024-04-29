let stopBtn=document.getElementById('stopButton');
let readyBtn=document.getElementById('readyButton');
let goBtn=document.getElementById('goButton');


let stopLight=document.getElementById('stopLight');
let readyLight=document.getElementById('readyLight');
let goLight=document.getElementById('goLight');

stopBtn.addEventListener('click',function(){
    stopBtn.style.background="red";
    stopBtn.style.color="#fff";

    readyBtn.style.background="#fff";
    readyBtn.style.color="#000";
    goBtn.style.background="#fff";
    goBtn.style.color="#000";
    
    stopLight.style.background="red";
    readyLight.style.background="rgb(53, 48, 48)";
    goLight.style.background="rgb(53, 48, 48)";
});
readyBtn.addEventListener('click',function(){
    readyBtn.style.background="orange";
    readyBtn.style.color="#fff";

    stopBtn.style.background="#fff";
    stopBtn.style.color="#000";
    goBtn.style.background="#fff";
    goBtn.style.color="#000";
    
    readyLight.style.background="orange";
    stopLight.style.background="rgb(53, 48, 48)";
    goLight.style.background="rgb(53, 48, 48)";
});
goBtn.addEventListener('click',function(){
    goBtn.style.background="green";
    goBtn.style.color="#fff";

    stopBtn.style.background="#fff";
    stopBtn.style.color="#000";
    readyBtn.style.background="#fff";
    readyBtn.style.color="#000";

    stopLight.style.background="rgb(53, 48, 48)";
    readyLight.style.background="rgb(53, 48, 48)";
    goLight.style.background="green";
});