var startTime = new Date();
var savedTime, difference;
var hour = startTime.getHours();
var min = startTime.getMinutes();
var sec = startTime.getSeconds();

var isOn = false;
var interval=0;


//Get the time elements
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secsEl = document.getElementById("sec");
//Get the start/stop and reset buttons
const startBtn = document.getElementById("start");
startBtn.addEventListener('click', start);
const stopBtn = document.getElementById("stop");
stopBtn.addEventListener('click', stop);
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', reset)

/**
 * Function is called when reset is clicked. It resets the stopwatch
 */
function reset(){
    startTime = new Date();
    savedTime = 0;
    updateWatch(0,0,0);
}
/**
 * This function is called to start the stopwatch. 
 */
function start() {
    startTime = new Date();
    interval = setInterval(stopwatch, 1000);
}
/**
 * This function is called to stop the stopwatch. 
 */
function stop() {
    savedTime = difference;
    clearInterval(interval);
}

/**
 * This function is the logic behind the stopwatch. It calculates the difference in time and then calls the method to update the stopwatch. 
 */
function stopwatch(){
    var currentTime = new Date();

    if(savedTime){
        difference = (currentTime - startTime) + savedTime;
    }else{
        difference = (currentTime - startTime);
    }

    var hoursPassed = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minsPassed = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var secsPassed = Math.floor((difference % (1000 * 60)) / 1000);



    updateWatch(hoursPassed, minsPassed, secsPassed);
}

/**
 * This function updates the stopwatch UI with the current time elapsed. 
 * @param {*} hour - given hours that have gone by
 * @param {*} min - given minutes that have gone by
 * @param {*} sec - given seconds that have gone by
 */
function updateWatch(hour, min, sec){
    hourEl.innerHTML = hour < 10 ? `0${hour}`: hour;
    minEl.innerHTML = min < 10 ? `0${min}`:min;
    secsEl.innerHTML = sec < 10 ? `0${sec}`:sec;
}