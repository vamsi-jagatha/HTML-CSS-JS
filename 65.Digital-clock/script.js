const clock=document.querySelector('.clock');
const displayHMS=document.querySelector('.Hrs-Min-Sec');
const displayPeriod=document.querySelector('.period');
const displayDay=document.querySelector('.date');
const displayMD=document.querySelector('.month-date');
const displayY=document.querySelector('.year');

function currentTime(){
    // creating Date Object and representing the following values
    let time = new Date;
    let day = time.getDay();
    let month = time.getMonth();
    let date = time.getDate();
    let year = time.getFullYear();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let period = "AM";
    
    // converting from 24Hrs to 12Hrs
    if (hours == 0){
        hours = 12;
    }
    
    if (hours > 12){
        hours = hours - 12;
        period = "PM";
    }
    
    // representing Time
    hours = (hours < 10 )? "0" + hours : hours;
    minutes = (minutes <10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    date =(date<10) ? "0" + date : date;
    
    let T = `${hours} : ${minutes} : ${seconds} ${period}`;
    displayHMS.innerHTML=`${hours}: ${minutes}: ${seconds}`;
    displayPeriod.innerHTML=`${period}`;

    // representing day and month and year
    let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sept", "Oct", "Nov", "Dec"];
    let allDays=["SUN","MON","TUE","WED","THUR","FRI","SAT"];


    let presentDay=`${allMonths[month]} ${allDays[day]} ${date} ${year}`;
    displayDay.innerHTML=`${allDays[day]}`;
    displayMD.innerHTML=`${allMonths[month]}/${date}`;
    displayY.innerHTML=`${year}`;
}

setInterval(currentTime,1000);

currentTime();