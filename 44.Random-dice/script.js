const backgroundEle=document.getElementById('background');
backgroundEle.classList.add('background');

const containerEle=document.createElement('div');
containerEle.style.height="50%";
containerEle.style.display="flex";
containerEle.style.justifyContent="center";
containerEle.style.alignItems="center";
containerEle.style.flexDirection="column";
backgroundEle.appendChild(containerEle);

const imageEle=document.createElement('img');
imageEle.src="images/dice1.png";
imageEle.style.height="200px";
containerEle.appendChild(imageEle);

const buttonEle=document.createElement('button');
buttonEle.textContent="Generate";
buttonEle.style.padding="0.5rem 1rem";
buttonEle.style.borderRadius="7px";
buttonEle.style.fontWeight="600";
containerEle.appendChild(buttonEle);


let randomNumber=()=>{
    let ranNum=Math.ceil(Math.random()*6);
    return ranNum;
}


buttonEle.addEventListener('click',()=>{
    imageEle.src="images/dice"+randomNumber() +".png";
})