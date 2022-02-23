

// // timer //
// var times = 60;
// var timers = setInterval(function(){
//     if(times <= 0){
//         clearInterval(timers);
//     }
//     document.getElementById("progress").value = 10 - timeleft;
//     times -= 1;
// }, 1000);

// var timer = duration, minutes, seconds; 
// setInterval(function() {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//         timer = duration;
//         }
//     }, 1000);


// window.onload = function() {
//     var oneMinute = 60;
//     display = document.querySelector('#time');
//     startTimer(oneMinute, display);
// }

// timer expired popout message //
// if ( < 0) {
    
// }

// high score button
var viewHighScoresBtnEl = document.getElementById('view-high-scores');

// Start Quiz Button
var startQuizBtnEl = document.getElementById('start-quiz');
startQuizBtnEl.addEventListener('click', startQuiz)
function startQuiz() {
    console.log('button was clicked!');

}

// hide stuff
var answer1BtnEl = document.getElementById('answer1');
answer1BtnEl.style.display = 'none';
var answer2BtnEl = document.getElementById('answer2');
answer2BtnEl.style.display = 'none';
var answer3BtnEl = document.getElementById('answer3');
answer3BtnEl.style.display = 'none';
var answer4BtnEl = document.getElementById('answer4');
answer4BtnEl.style.display = 'none';

// questions

// answers buttons

// submit button
var submitBtnEl = document.getElementById('submitScore');