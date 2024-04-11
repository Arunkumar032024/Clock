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
    let secAna = 0;
    let minAna = 0;
    let hourAna = 0;
    let currentTimeAna = new Date();

    setInterval(()=>{
        currentTimeAna = new Date();
        secAna = currentTimeAna.getSeconds() * 6;
        minAna = currentTimeAna.getMinutes() * 6;
        hourAna = currentTimeAna.getHours() * 30 + Math.round(secAna / 12);
        document.querySelector("#second-hand").style.transform = "rotate(" + secAna + "deg)";
        document.querySelector("#minute-hand").style.transform = "rotate(" + minAna + "deg)";
        document.querySelector("#hour-hand").style.transform = "rotate(" + hourAna + "deg)";
    }, 1000)
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
    });
    document.querySelectorAll(".hand").forEach(hand =>{
        hand.style.background = "#fff";
    });
    document.querySelector(".point").style.background = "#fff";
}
btnDay.onclick = () => {
    document.body.classList.toggle("nightMode");
    btnNight.classList.toggle("hide");
    btnDay.classList.toggle("hide");
    digiClockSpans.forEach(span => {
        span.classList.remove("white");
    });
    document.querySelectorAll(".hand").forEach(hand =>{
        hand.style.background = "#000";
    });
    document.querySelector(".point").style.background = "#000";
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



