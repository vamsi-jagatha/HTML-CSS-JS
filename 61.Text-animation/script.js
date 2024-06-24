document.addEventListener('DOMContentLoaded', (event) => {
   const text=document.querySelector('.text');
   
   let textChange=(()=>{
      setTimeout(()=>{
         text.textContent="Jagatha Sri Hari Vamsi";
      },0);
      setTimeout(()=>{
         text.textContent="Web Developer";
      },4000);
      setTimeout(()=>{
         text.textContent="Front-End Developer";
      },8000);
      
   });
   textChange();


   let repeatTextChange=setInterval(textChange,12000);
   repeatTextChange();
});
