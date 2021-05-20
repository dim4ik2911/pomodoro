const timer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
};

const modeButtons = document.querySelector("#mode-buttons");
modeButtons.addEventListener("click", chooseMode);

function updateTime() {
  const remainingTime = timer.remainingTime;
  const minutes = `${remainingTime.minutes}`.padStart(2, "0");
  const seconds = `${remainingTime.seconds}`.padStart(2, "0");

  const min = document.getElementById("time-minutes");
  const sec = document.getElementById("time-seconds");
  min.textContent = minutes;
  sec.textContent = seconds;
}

function switchMode(mode) {
  timer.mode = mode;
  timer.remainingTime = {
    total: timer[mode] * 60,
    minutes: timer[mode],
    seconds: 0,
  };

  document
    .querySelectorAll("button[data-mode]")
    .forEach((e) => e.classList.remove("active"));
  document.querySelector(`[data-mode="${mode}"]`).classList.add("active");
  document.body.style.backgroundColor = `var(--${mode})`;

  updateTime();
}

function chooseMode(event) {
  const { mode } = event.target.dataset;

  if (!mode) return;

  switchMode(mode);
}
