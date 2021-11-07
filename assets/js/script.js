// timer //
var times = 60;
var timers = setInterval(function(){
    if(times <= 0){
        clearInterval(timers);
    }
    document.getElementById("progress").value = 10 - timeleft;
    times -= 1;
}, 1000);

var timer = duration, minutes, seconds; 
setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = duration;
        }
    }, 1000);
}

window.onload = function() {
    var oneMinute = 60;
    display = document.querySelector('#time');
    startTimer(oneMinute, display);
}

// timer expired popout message //
if ( < 0) {
    
}