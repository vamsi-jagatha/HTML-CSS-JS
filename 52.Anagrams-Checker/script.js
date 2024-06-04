let wordInput1=document.getElementById('word1');
let wordInput2=document.getElementById('word2');
let result=document.getElementById('result');
let button=document.getElementById('button');
        
    let array1=[];
    let array2=[];
        
        wordInput1.addEventListener('input',(e)=>{
            array1.push(e.target.value.toLowerCase());
        });
        wordInput2.addEventListener('input',(e)=>{
            array2.push(e.target.value.toLowerCase());
        });

    
        button.addEventListener('click',()=>{
            const word1 = wordInput1.value.trim();
            const word2 = wordInput2.value.trim();

             if (!word1 ||!word2) {
                 result.textContent="Please enter both words*";
                 wordInput1.style.border="2px solid orangered";
                 wordInput2.style.border="2px solid orangered";
                 return;
                }

            let sortedArray1=array1.at(-1).split("").sort().join("");
            let sortedArray2=array2.at(-1).split("").sort().join("");

            if (sortedArray1===sortedArray2){
                result.textContent="Anagrams";
                wordInput1.style.border="3px solid green";
                wordInput2.style.border="3px solid green";

            }else{
                result.textContent="Not Anagrams";
            }

            wordInput1.value = '';
            wordInput2.value = '';
        })