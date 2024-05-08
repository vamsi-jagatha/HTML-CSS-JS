let updateBtn = document.getElementById('updateBtn');
let newPassword = document.getElementById('newPassword');
let confirmPassword = document.getElementById('confirmPassword');
let updateMsg=document.getElementById('updateMsg');

let newPasswordErrMsg = document.getElementById('newPasswordErrMsg');
newPassword.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        newPasswordErrMsg.textContent = "Required*";
    } else {
        newPasswordErrMsg.textContent = "";
        
    }
});

let confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');
confirmPassword.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsg.textContent = "Required*";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
});

function validatePassword() {

    if (newPassword.value === "") {
        newPasswordErrMsg.textContent = "Required*";
        confirmPasswordErrMsg.textContent = "";
        updateMsg.textContent="";
    } else if (confirmPassword.value === "") {
        updateMsg.textContent="";
        confirmPasswordErrMsg.textContent = "Required*";
        newPasswordErrMsg.textContent = "";
    }
}

function updatePassword() {
    if (newPassword.value !== confirmPassword.value) {
        confirmPasswordErrMsg.textContent = "Password must be same";
        updateMsg.textContent="";
    } 
    else if(newPassword.value === confirmPassword.value){
        updateMsg.textContent="Updated Successfully";
        confirmPasswordErrMsg.textContent="";
        
    } 
    else {
        confirmPasswordErrMsg.textContent = "";
        newPasswordErrMsg.textContent = "";
  
    }

}

newPassword.addEventListener('click',function(){
    updateMsg.textContent="";
});

confirmPassword.addEventListener('click',function(){
    updateMsg.textContent="";

});



updateBtn.addEventListener('click', function(event) {
    event.preventDefault();
    updatePassword();
    validatePassword();
    
});





