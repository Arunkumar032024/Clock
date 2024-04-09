// to get the element value from the index file 
var hours = document.querySelector("#hour");
var minutes = document.querySelector("#min");
var seconds = document.querySelector("#sec");
var mode = document.querySelector("#mode");
var title = document.querySelector("#title");
var welcome = document.querySelector(".welcome-note");

function digitalClock(){
    title.innerHTML = "Digital Clock";
    setInterval(() => {
        let currentTime = new Date();
        let h = currentTime.getHours();
        let m = currentTime.getMinutes();
        let s = currentTime.getSeconds();
        mode.innerHTML = h < 12 ? 'AM' : 'PM';
        h = h < 12 ? h : h - 12;
        hours.innerHTML = h < 10 ? `0${h}` : h;
        minutes.innerHTML = m < 10 ? `0${m}` : m;
        seconds.innerHTML = s < 10 ? `0${s}` : s;
        
    }, 1000);
}

function analogClock(){
    title.innerHTML = "Analog Clock";
}




// change mode
var btnNight = document.querySelector("#moon");
var btnDay = document.querySelector("#sun");

btnNight.onclick = () => {
    document.body.classList.toggle("nightMode");
    btnNight.classList.toggle("hide");
    btnDay.classList.toggle("hide");
    digiClockSpans.forEach(span => {
        span.classList.add("white");
    })
}
btnDay.onclick = () => {
    document.body.classList.toggle("nightMode");
    btnNight.classList.toggle("hide");
    btnDay.classList.toggle("hide");
    digiClockSpans.forEach(span => {
        span.classList.remove("white");
    })
}


// change clock 
var btnDigiClock = document.querySelector("#digi-clock");
var btnAnaClock = document.querySelector("#ana-clock");
var digiClock = document.querySelector(".digi-clock");
var digiClockSpans = document.querySelectorAll(".digi-clock span");
var anaClock = document.querySelector(".ana-clock");
btnDigiClock.onclick = () => {
    digitalClock();
    welcome.style.display = "none";
    btnDigiClock.classList.add("active");
    btnAnaClock.classList.remove("active");
    digiClock.style.display = 'flex';
    anaClock.style.display = 'none';

}
btnAnaClock.onclick = () => {
    analogClock();
    welcome.style.display = "none";
    btnAnaClock.classList.add("active");
    btnDigiClock.classList.remove("active");
    digiClock.style.display = 'none';
    anaClock.style.display = 'block';
}
