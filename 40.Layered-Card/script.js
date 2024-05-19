let activeStatus=document.querySelector('.status');
let statusDot=document.querySelector('.status-dot');
let listOfNames=document.querySelector('.name');
let arrayOfNames=[
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Wilson",
    "Eva Martinez",
    "Frank White",
    "Grace Clark",
    "Henry Davis",
    "Isabella Lewis",
    "Jack Walker",
    "Karen Hall",
    "Liam Young",
    "Mia Hernandez",
    "Nathan King",
    "Olivia Lee",
    "Paul Wright",
    "Quinn Harris",
    "Rachel Nelson",
    "Samuel Scott",
    "Tina Adams"
];

let randomName=()=>arrayOfNames[Math.floor(Math.random()*20)];

listOfNames.textContent=randomName();


let uniqueId=setInterval(function(){
    activeStatus.textContent="Active";
    statusDot.style.background="rgb(47, 232, 47)";
},2000);