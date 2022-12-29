// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount.
// При каждом вызове передай ей номер создаваемого промиса(position) и задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).
// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени.
// Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров.
// Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const btnFormEl = document.querySelector('button');

function handleFormSubmit(ev) {
  ev.preventDefault();
  const dataForm = ev.target.elements;
  let delay = Number(dataForm.delay.value);
  const step = Number(dataForm.step.value);
  const amount = Number(dataForm.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const data = { position, delay };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(data);
      } else {
        reject(data);
      }
    }, delay);
  });
}

formEl.addEventListener('submit', handleFormSubmit);
