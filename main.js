const pomodoroButton = document.getElementById("pomodoro");
const breakButton = document.getElementById("break");
const startButton = document.getElementById("start");
const time = document.getElementById("timer");
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");

time.innerHTML = `00 10`;

function startTimer() {
  let presentTime = time.innerHTML;
  let timeArray = presentTime.split(" ");
  let m = parseInt(timeArray[0]);
  let s = checkSeconds(parseInt(timeArray[1] - 1));
  if (presentTime == `00 00`) {
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

startButton.addEventListener("click", () => {
  let timingInterval = setInterval(startTimer, 1000);
  timingInterval;
  startButton.disabled = true;

  breakButton.addEventListener("click", () => {
    time.innerHTML = `00 05`;
    clearInterval(timingInterval);
    startButton.disabled = false;
  });

  pomodoroButton.addEventListener("click", () => {
    time.innerHTML = `00 10`;
    clearInterval(timingInterval);
    startButton.disabled = false;
  });
});

breakButton.addEventListener("click", () => {
  time.innerHTML = `00 05`;
  clearInterval(startTimer);
});

pomodoroButton.addEventListener("click", () => {
  time.innerHTML = `00 10`;
  clearInterval(startTimer);
});

playButton.addEventListener("click", () => {
  audio.play();
});
