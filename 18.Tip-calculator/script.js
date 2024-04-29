let billAmountEle=document.getElementById('billAmount');
let percentageTipEle=document.getElementById('percentageTip');

let tipAmountEle=document.getElementById('tipAmount');
let totalAmountEle=document.getElementById('totalAmount');

let errorMsg=document.getElementById('errorMessage');

let calculateBtn=document.getElementById('calculateButton');
calculateBtn.addEventListener('click',function(){
    
    if (billAmountEle.value==="" || percentageTipEle.value===""){
        errorMsg.textContent="/* "+"Please Enter a valid Input"+" */";
        tipAmountEle.value="";
        totalAmountEle.value="";
    }

    else{
        let billAmount=parseInt(billAmountEle.value);
        let percentageTip=parseInt(percentageTipEle.value);

        let calculatedTip=(percentageTip/100)*billAmount;
        let totalAmount=billAmount+calculatedTip;

        tipAmountEle.value=calculatedTip;
        totalAmountEle.value=totalAmount;

        errorMsg.textContent="";

    }
    
})