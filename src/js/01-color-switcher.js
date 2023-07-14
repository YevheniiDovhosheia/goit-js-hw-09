function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', startChang);
stopBtn.addEventListener('click', stopChang);

function startChang() {
  timerId = setInterval(getBgColor, 1000);

  startBtn.toggleAttribute('disabled');
}
function getBgColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
function stopChang() {
  clearInterval(timerId);

  startBtn.removeAttribute('disabled');
}
