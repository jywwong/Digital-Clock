function displayTime(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
let secs = date.getSeconds();
let ampm = document.getElementById('ampm');

if (hrs >=12) {
    ampm.innerHTML = "PM";
}else{
    sessionStorage.innerHTML ="AM";
}
if (hrs>12){
    hrs = hrs - 12;
}
if (hrs<=9) {
    hrs = "0"+ hrs;
}
if (mins<=9) {
    mins = "0"+ mins;
}
if (secs <=9) {
    secs = "0"+ secs;
}

document.getElementById('hours').innerHTML = hrs;
document.getElementById('minutes').innerHTML = mins;
document.getElementById('seconds').innerHTML = secs;
}

setInterval(displayTime, 10);