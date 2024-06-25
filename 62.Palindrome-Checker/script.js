const userInput=document.querySelector('#userInput');
const btnCheck=document.querySelector('#btnCheck');
const result=document.querySelector('#result');

btnCheck.addEventListener('click',()=>{
    let userInputvalue=userInput.value;
    let originalArray=userInputvalue.split('');
    let reverseArray=userInputvalue.split('').reverse();
    
    function checkIsPalindrome(originalArray,reverseArray){
        for (let i=0; i<originalArray.length; i++){
            if(originalArray[i]===reverseArray[i]){
                result.textContent=`Yes! '${userInputvalue}' is a Palindrome.`
            }else{
                result.textContent=`No! '${userInputvalue}' is not a Palindrome.`
            }
        }
    }
        checkIsPalindrome(originalArray,reverseArray);
    });

    userInput.addEventListener('input',(e)=>{
        let symbols=`!#$%&'()*+,-./:;<=>?@[\\]^_\`"{|}~`;
        if (symbols.includes(`${userInput.value}`)){
            result.textContent=`Enter valid "word"`;
        }else{
            result.textContent="";
        }

        if (userInput.value===""){
            result.textContent="";
        }


        if (userInput.value!==""){
            btnCheck.disabled=false;
            btnCheck.style.background='rgb(248, 62, 6)';
            btnCheck.style.cursor="pointer";
        }else{
            btnCheck.style.background='rgba(255, 63, 4, 0.642)';
            btnCheck.disabled=true;
            btnCheck.style.cursor="not-allowed";
        }
    });