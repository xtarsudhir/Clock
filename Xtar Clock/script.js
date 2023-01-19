let hr = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')


function setTime(){
    let Time = new Date();
    let getHour = Time.getHours();
    let getMinute = Time.getMinutes();
    let getSeconds = Time.getSeconds();
    console.log(getHour, getMinute, getSeconds);

    let nowHour = getHour * 30;
    let nowMinute = getMinute * 6;
    let nowSecond = getSeconds * 6;

    
    hr.style.transform = `rotate(${nowHour+(getMinute/2)}deg)`;
    sec.style.transform = `rotate(${nowSecond}deg)`;
    min.style.transform = `rotate(${nowMinute}deg)`;

}

setTime();
setInterval(setTime, 1000)

