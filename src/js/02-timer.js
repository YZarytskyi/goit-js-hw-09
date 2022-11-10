import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const resetBtn = document.querySelector('[data-reset]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

startBtn.disabled = true;
resetBtn.disabled = true;

let interval = null;
let selectedDate = null;

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
    selectedDate = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);

function startTimer() {
  startBtn.disabled = true;
  if (selectedDate - Date.now() < 1000) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  resetBtn.disabled = false;
  timerCount(selectedDate);
  interval = setInterval(() => {
    timerCount(selectedDate);
  }, 1000);
}

function resetTimer() {
  resetBtn.disabled = true;
  clearInterval(interval);
  resetTimerValues(daysRef, hoursRef, minutesRef, secondsRef);
  startBtn.disabled = false;
}

function timerCount(selectedDate) {
  const remainingTimeMs = selectedDate - Date.now();
  const {
    days: d,
    hours: h,
    minutes: m,
    seconds: s,
  } = convertMs(remainingTimeMs);

  daysRef.textContent = addLeadingZero(d);
  hoursRef.textContent = addLeadingZero(h);
  minutesRef.textContent = addLeadingZero(m);
  secondsRef.textContent = addLeadingZero(s);

  if (remainingTimeMs < 1000) {
    clearInterval(interval);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function resetTimerValues(...args) {
  args.forEach(el => (el.textContent = '00'));
}
