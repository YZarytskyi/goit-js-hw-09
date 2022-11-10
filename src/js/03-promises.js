import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
let delayVal;
let stepVal;
let amountVal;

form.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;

  delayVal = Number(delay.value);
  stepVal = Number(step.value);
  amountVal = Number(amount.value);

  for (let i = 1; i <= amountVal; i += 1) {
    console.log(delayVal);
    createPromise(i, delayVal)
      .then(({position, delay}) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({position, delay}) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayVal += stepVal;
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}