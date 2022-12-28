const formEl = document.querySelector('.form');
const btnFormEl = document.querySelector('button');
console.log('asd');

function handleFormSubmit(ev) {
  ev.preventDefault();
  const dataForm = ev.target.elements;
  console.log(dataForm);
}

btnFormEl.addEventListener('submit', handleFormSubmit);
