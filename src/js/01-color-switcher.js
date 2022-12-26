// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона < body > на случайное значение используя инлайн
// стиль.При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз.Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была
// не активна(disabled).
// Для генерации случайного цвета используй функцию getRandomHexColor.
const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

const handleChangeColor = () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
};

const handleFixedColor = () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', handleChangeColor);
stopBtn.addEventListener('click', handleFixedColor);
