let Btn=document.getElementById('Btn');
let container=document.getElementById('hideContainer')
let closeBtn=document.getElementById('closeBtn');
let saveBtn=document.getElementById('saveBtn');
let launchBtn=document.getElementById('launchBtn');

launchBtn.addEventListener('click',()=>{
    container.classList.remove('hide-container');
    launchBtn.style.display="none";
    setTimeout(()=>{
        launchBtn.style.display="block";
    },1050)
})

closeBtn.addEventListener('click',()=>{
    container.classList.add('hide-container');
})

Btn.addEventListener('click',()=>{
    container.classList.add('hide-container');
})