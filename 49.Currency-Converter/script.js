const userInputAmount=document.getElementById('userInputAmount'),
 fromFlag=document.getElementById('fromFlag'),
 toFlag=document.getElementById('toFlag'),
 selectFrom=document.getElementById('selectFrom'),
 selectTo=document.getElementById('selectTo'),
 getExchnageBtn=document.getElementById('getExchangeBtn'),
 resultAmount=document.getElementById('resultAmount'),
 loader=document.getElementById('loader'),
 form=document.getElementById('form');

 
 for (let countryCode in countryList){
     let newOption=document.createElement('option');
     newOption.textContent=countryCode;
     newOption.value=countryCode;
     selectFrom.appendChild(newOption);
 }
 for (let countryCode in countryList){
     let newOption=document.createElement('option');
     newOption.textContent=countryCode;
     newOption.value=countryCode;
     selectTo.appendChild(newOption);
 }
 
 const currencies=async()=>{
    try{
        let selectedFromCountry=selectFrom.value.toLowerCase();
        let selectedToCountry=selectTo.value.toLowerCase();
        loader.style.display="block";
        const responseCurrency= await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${selectedFromCountry}.json`);
        const jsonData= await responseCurrency.json();
        const exchangeRate=jsonData[selectedFromCountry][selectedToCountry];
        return exchangeRate;
    }catch(error){
        console.log(error);
        return undefined;
    }
}

getExchnageBtn.addEventListener('click',async()=>{
    if (userInputAmount.value==="" ){
        resultAmount.textContent="Enter the amount*";
    }
    else{
        let userInputAmountValue=Number(userInputAmount.value);
        let finalExchange= await currencies();
        let conversion=(userInputAmountValue)*finalExchange;
        loader.style.display="none";
        resultAmount.textContent=`${userInputAmountValue} ${selectFrom.value} = ${conversion} ${selectTo.value}`;
    }
});

selectFrom.addEventListener('change',()=>{
    let selectedFromFlag=selectFrom.value.slice(0,2);
    fromFlag.src=`https://flagsapi.com/${selectedFromFlag}/flat/64.png`;
});
selectTo.addEventListener('change',()=>{
    let selectedToFlag=selectTo.value.slice(0,2);
    toFlag.src=`https://flagsapi.com/${selectedToFlag}/flat/64.png`;
});





form.addEventListener('submit',(e)=>{
    e.preventDefault();
});


userInputAmount.addEventListener('blur',()=>{
    getExchnageBtn.disabled=true;
    if(userInputAmount.value===""){
        resultAmount.textContent= "Enter the Amount*";
    }else{
        getExchnageBtn.disabled=false;
    }
});
