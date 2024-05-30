const cardNumber=document.getElementById('cardNumber'),
cardHolder=document.getElementById('cardHolder'),
CVV=document.getElementById('CVV'),
expiryDate=document.getElementById('expiryDate'),
inputCardNumber=document.getElementById('inputCardNumber'),
inputCardHolder=document.getElementById('inputCardHolder'),
inputCVV=document.getElementById('inputCVV'),
selectMonth=document.getElementById('selectMonth'),
selectYear=document.getElementById('selectYear'),
submitBtn=document.getElementById('submitBtn'),
detailsForm=document.getElementById('detailsForm'),
errorMsg1=document.querySelector('.errorMsg1'),
errorMsg2=document.querySelector('.errorMsg2');


function hideNumbers(num){
    let arr=[];
    num.split('').map((eachItem,index)=>{
        if(index>3 && index<12){
            arr.push("*");
        }
        else if(index>15){
         arr.push('');
        }
        else{
            arr.push(eachItem);
        }
    });
    return arr.join('');
}



detailsForm.addEventListener('submit',function(event){
    event.preventDefault();
})

inputCardNumber.addEventListener('blur',function(event){
    if(inputCardNumber.value===""){
        errorMsg1.textContent="required*";
    }
    else{
        errorMsg1.textContent="";
    }
 
})

inputCardHolder.addEventListener('blur',function(event){
    if(inputCardHolder.value===""){
        errorMsg2.textContent="required*"
    }
    else{
        errorMsg2.textContent="";
    }
})

selectMonth.addEventListener('change',function(){
    expiryDate.textContent=selectMonth.value+"/YY";
});

inputCardNumber.addEventListener('keyup',(event)=>{
    let num=inputCardNumber.value;
    if (!isNaN(num)&& num.trim()!==""){
        cardNumber.textContent=hideNumbers(num);
    }else{
        cardNumber.textContent==="";
    }
    // checking the numbers typed are not greater than 16
    if (inputCardNumber.value.length>16){
        errorMsg1.textContent="Invalid Card Number*";
    }else{
        errorMsg1.textContent="";
    }

});

inputCardHolder.addEventListener('keyup',(event)=>{
    let upperCaseFullName=inputCardHolder.value.toUpperCase();
    if (upperCaseFullName.length<23){
        cardHolder.textContent=upperCaseFullName;
    }
});

selectYear.addEventListener('change',function(){
    expiryDate.textContent=selectMonth.value+"/"+selectYear.value;
});

CVV.addEventListener('input',(event)=>{
    CVV.value=inputCVV.value;
})