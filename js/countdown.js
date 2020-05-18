var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();



var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time-days").innerHTML = days;
    document.getElementById("time-hours").innerHTML = hours;
    document.getElementById("time-minutes").innerHTML = minutes;
    document.getElementById("time-seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = '<div class="col text-center mb-3"><h3>Already Lauched</h3></div>';
    }
}, 1000);