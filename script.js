let countDownDate = new Date("Jul 07, 2022 00:00:00").getTime();

setInterval(update, 1000); 
let now = new Date().getTime();
let timeleft = countDownDate - now;
function update(){

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days + "D "
document.getElementById("hours").innerHTML = hours + "H " 
document.getElementById("mins").innerHTML = minutes + "M " 
document.getElementById("secs").innerHTML = seconds + "S"
 now = new Date().getTime();
 timeleft = countDownDate - now;
}