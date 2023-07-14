import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', formSubmit);

function formSubmit(evt) {
  evt.preventDefault()
  
  let delay = Number(evt.target.querySelector('input[name="delay"]').value);
  const step = Number(evt.target.querySelector('input[name="step"]').value);
  const amount = Number(evt.target.querySelector('input[name="amount"]').value);
  
  for (let i = 1; i <= amount; i += 1){
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delay += step;
  }
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay)
  })
}