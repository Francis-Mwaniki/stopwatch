/*WE ARE CREATING A STOPWATCH, create a timeToString function that takes time and performs and return formattedMM,formattedSS,formattedMS */
const timeToString = time => {
    const formattedMM = Math.floor(time / 60000).toString().padStart(2, '0');
    const formattedSS = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
    const formattedMS = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
    };
/* declare startTime, timerInterval and initialize elapsedTime to 0  */
let startTime
let  timerInterval
let  elapsedTime = 0;
/* create function print that takes in txt and get elementbyid=display and there use innerHtml */
const print = txt => {
    document.getElementById('display').innerHTML = txt;
    }
/* create start,pause and reset functions */
const start = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
        }, 10);
        showButton("PLAY")
    }
const pause = () => {
    /* clear timerInterval */
    clearInterval(timerInterval);
    timerInterval = null;
    showButton("PAUSE")
    }
const reset = () => {
    clearInterval(timerInterval);
    print('00:00:00');
    elapsedTime = 0;
    showButton("RESET")
    }

const showButton = (buttonKey) => {
    /* create buttontoshow ("PLAY?playButton:pauseButton") and buttontohide */
    const buttonToShow = buttonKey === "PLAY" ? "playButton" : "pauseButton";
    const buttonToHide = buttonKey === "PLAY" ? "pauseButton" : "playButton";

   buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";



    }

/* initialize playbutton, pausebutton, resetbutton and create event listeners for start,pause and reset */
const playButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

playButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);




