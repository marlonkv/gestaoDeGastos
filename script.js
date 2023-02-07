const botao = document.querySelector('.botao');
const main = document.querySelector('main');

botao.addEventListener('click', function () {
  this.classList.toggle('active');
  main.classList.toggle('active');
});

const saldo = document.querySelector('.meu-saldo');
const saldoDisplay = document.querySelector('.saldo h1');
saldo.addEventListener('change', (e) => {
  localStorage.saldo = e.target.value;
});
saldoDisplay.innerText = localStorage.saldo;

const form = document.querySelector('.segunda-tela form');
form.addEventListener('change', (e) => {
  if (e.target.name === 'dia-1') localStorage.dia1 = +e.target.value;
  if (e.target.name === 'dia-2') localStorage.dia2 = +e.target.value;
  if (e.target.name === 'dia-3') localStorage.dia3 = +e.target.value;
  if (e.target.name === 'dia-4') localStorage.dia4 = +e.target.value;
  if (e.target.name === 'dia-5') localStorage.dia5 = +e.target.value;
  if (e.target.name === 'dia-6') localStorage.dia6 = +e.target.value;
  if (e.target.name === 'dia-7') localStorage.dia7 = +e.target.value;
});

const grafico = document.querySelectorAll('.grafics li');
setInterval(() => {
  grafico[0].style.height = `${localStorage.dia1}px`;
  grafico[1].style.height = `${localStorage.dia2}px`;
  grafico[2].style.height = `${localStorage.dia3}px`;
  grafico[3].style.height = `${localStorage.dia4}px`;
  grafico[4].style.height = `${localStorage.dia5}px`;
  grafico[5].style.height = `${localStorage.dia6}px`;
  grafico[6].style.height = `${localStorage.dia7}px`;
}, 10);
