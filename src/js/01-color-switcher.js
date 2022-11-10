const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', backgroundChange);
stopBtn.addEventListener('click', stopBackgroundChange);

stopBtn.disabled = true;

let timeout = null;

function backgroundChange(e) {
  e.currentTarget.disabled = true;
  stopBtn.disabled = false;
  backgroundColorRandom();
  timeout = setInterval(() => {
    backgroundColorRandom();
  }, 1000);
}

function stopBackgroundChange(e) {
  e.currentTarget.disabled = true;
  startBtn.disabled = false;
  clearInterval(timeout);
}

function backgroundColorRandom() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
