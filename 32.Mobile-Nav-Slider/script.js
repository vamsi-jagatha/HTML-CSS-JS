let navSliderForMobile=document.getElementById('navSliderForMobile');
let navIcon=document.getElementById('navIcon');
let background=document.getElementById('background');
let iconChange=document.getElementById('iconChange');

navIcon.addEventListener('click',function(){
    navSliderForMobile.classList.toggle("hide-slider");
})


iconChange.addEventListener('click',function(){
    background.classList.toggle('dark-theme');
    navSliderForMobile.classList.toggle('dark-theme')
    
    if (iconChange.classList.contains('fa-moon')){
        iconChange.classList.remove('fa-moon')
        iconChange.classList.add('fa-sun')
    }
    else{
        iconChange.classList.add('fa-moon');
        iconChange.classList.remove('fa-sun');
    }
  

})


