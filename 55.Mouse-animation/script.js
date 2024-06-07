const cursor=document.getElementById('cursor');
const bg=document.getElementById('bg');
const content=document.getElementById('content');
bg.addEventListener('mousemove',(e)=>{
        gsap.to(cursor,{
            x:e.x,
            y:e.y,
            duration:0.4,
            ease:"power4.out"
        })
})

content.addEventListener('mouseenter',(e)=>{
    gsap.to(cursor,{
        scale:1.6,

    })
    console.log("entered")
})

content.addEventListener('mouseleave',(e)=>{
    gsap.to(cursor,{
        scale:1,

    })
})