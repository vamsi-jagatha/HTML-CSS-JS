let submitBtn=document.querySelector('.submit-btn');
let inputEmail=document.querySelector('#inputEmail');
let toastContainer=document.querySelector('.toast-container');

function addToast(msg){
    let toastBox=document.createElement('div');
    toastBox.classList.add('toast');
    toastBox.innerHTML=msg;
    toastBox.style.fontWeight="600";
    toastContainer.appendChild(toastBox);

    if (msg.includes('Subscribed')){
        toastBox.classList.add('green');
    }

    if( msg.includes('valid')){
        toastBox.classList.add('red');
    }

    setTimeout(()=>{
        toastBox.remove();
    },1500);
}

submitBtn.addEventListener('click',()=>{
    let successMsg=`<i class="fa-solid fa-circle-check"></i> Subscribed to 'Vamsi-Jagatha' !`;
    let errorMsg=`<i class="fa-solid fa-circle-info"></i> Enter valid email...!`;
    const inputEmailValue=inputEmail.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (emailPattern.test(inputEmailValue)){
        addToast(successMsg);
    }else{
        addToast(errorMsg);
    }
});