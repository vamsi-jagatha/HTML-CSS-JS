let bg=document.querySelector('#bg');
let navBar=document.querySelector('#navBar');
let brandName=document.querySelector('#brandName');
let btn1=document.querySelector('.button1');
let btn2=document.querySelector('.button2');
let colorsContainer=document.querySelector('#colorsContainer');
let dropDownBtn=document.querySelector('#dropDownBtn');
let colors=document.querySelectorAll('#colors');
let color1=document.querySelector('.color1');
let color2=document.querySelector('.color2');
let color3=document.querySelector('.color3');
let color4=document.querySelector('.color4');

dropDownBtn.addEventListener('click',()=>{
    colorsContainer.style.transform="translateY(40px) scale(1)";
});

bg.addEventListener('click',()=>{
    colorsContainer.style.transform=" scale(0)";
    
});


const selectedColor=(sc)=>{
    navBar.style.background=`${sc}`;
    brandName.style.color=`${sc}`;
    btn1.style.background=`${sc}`;
    btn2.style.color=`${sc}`;
    btn2.style.borderColor=`${sc}`;
    dropDownBtn.style.color=`${sc}`;
}

colors.forEach((specificColor)=>{
specificColor.addEventListener('click',()=>{
        colors.forEach(ele => ele.classList.remove('active'));
        specificColor.classList.add('active');
        selectedColor(specificColor.dataset.color);
    });
});