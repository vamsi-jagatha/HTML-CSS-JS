let sideBar=document.querySelector('.sidebar');
let hamBurger=document.querySelector('#hamBurger');


hamBurger.addEventListener('click',()=>{
    sideBar.classList.toggle('active');
})