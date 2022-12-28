// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты.Такой таймер может использоваться в блогах и
// интернет - магазинах, страницах регистрации событий, во время технического обслуживания и т.д.Посмотри демо видео работы таймера.
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const startBtnEl = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const currentDate = new Date();
// console.log('Current date: ', currentDate);

let intervalId = null;
let chosenDate = null;

startBtnEl.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //  console.log('Selected dates:', selectedDates[0]);

    if (selectedDates[0].getTime() <= currentDate.getTime()) {
      Notiflix.Report.warning(
        'Failed',
        'Please choose a date in the future',
        'Try again'
      );
      return;
    }
    chosenDate = selectedDates[0];
    startBtnEl.disabled = false;
  },
};
flatpickr('#datetime-picker', options);

function countdownTimer() {
  const differenceInTime = chosenDate.getTime() - new Date().getTime();
  //   console.log('differenceInTime: ', differenceInTime);
  if (differenceInTime < 0) {
    clearInterval(intervalId);
    startBtnEl.disabled = true;
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(differenceInTime);

  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function handleStartTimer() {
  intervalId = setInterval(countdownTimer, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtnEl.addEventListener('click', handleStartTimer);
