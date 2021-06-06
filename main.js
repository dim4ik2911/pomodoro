//declared main variables
const pomodoroButton = document.getElementById("pomodoro");
const breakButton = document.getElementById("break");
const startButton = document.getElementById("start");
const time = document.getElementById("timer");
//default time
time.innerHTML = `25 00`;

//timer function
function startTimer() {
  let presentTime = time.innerHTML;
  let timeArray = presentTime.split(" ");
  let m = parseInt(timeArray[0]);
  let s = checkSeconds(parseInt(timeArray[1] - 1));
  if (presentTime == `00 00`) {
    startButton.innerHTML = `Well Done!`;
    return;
  }
  if (s == 59) {
    m = m - 1;
  }
  if (m < 10) {
    m = "0" + m;
  }
  time.innerHTML = `${m} ${s}`;
}

function checkSeconds(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

//pressing the buttons
startButton.addEventListener("click", () => {
  if (startButton.innerHTML == `Start`) {
    timingInterval = setInterval(startTimer, 1000);
    startButton.innerHTML = `Pause`;
  } else {
    clearInterval(timingInterval);
    startButton.innerHTML = `Start`;
  }

  breakButton.addEventListener("click", () => {
    time.innerHTML = `05 00`;
    clearInterval(timingInterval);
    startButton.innerHTML = `Start`;
  });

  pomodoroButton.addEventListener("click", () => {
    time.innerHTML = `25 00`;
    clearInterval(timingInterval);
    startButton.innerHTML = `Start`;
  });
});

breakButton.addEventListener("click", () => {
  time.innerHTML = `05 00`;
  clearInterval(startTimer);
});

pomodoroButton.addEventListener("click", () => {
  time.innerHTML = `25 00`;
  clearInterval(startTimer);
});

//audio
const playButton = document.getElementById("play-button");
const audio = document.getElementById("audio");
let isPlaying = false;
const audioPlayer = () => {
  isPlaying ? audio.pause() : audio.play();
};
const audioImage = () => {
  if (isPlaying) {
    playButton.src = "./img/play.svg";
  } else {
    playButton.src = "./img/pause.svg";
  }
};

audio.onplaying = () => {
  isPlaying = true;
};
audio.onpause = () => {
  isPlaying = false;
};

playButton.addEventListener("click", () => {
  audioPlayer();
  audioImage();
});
