var countdownElement = document.getElementById("countdown");
var countdownDate = new Date("2023-08-30").getTime();

var countdownInterval = setInterval(function() {
var now = new Date().getTime();
var distance = countdownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdownElement.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerText = "Website is now live!";
    }
}, 1000);

