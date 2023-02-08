class Dados {
  constructor() {
    this.saldo = document.querySelector('.meu-saldo');
    this.saldoDisplay = document.querySelector('.saldo h1');

    this.form = document.querySelector('.segunda-tela form');

    this.grafico = document.querySelectorAll('.grafics li');

    this.totalMes = document.querySelector('.total h1');

    this.totalDias =
      +localStorage.dia1 +
      +localStorage.dia2 +
      +localStorage.dia3 +
      +localStorage.dia4 +
      +localStorage.dia5 +
      +localStorage.dia6 +
      +localStorage.dia7;
  }

  inserindoNoLocalstorag() {
    this.form.addEventListener('change', (e) => {
      if (e.target.name === 'dia-1') localStorage.dia1 = +e.target.value;
      if (e.target.name === 'dia-2') localStorage.dia2 = +e.target.value;
      if (e.target.name === 'dia-3') localStorage.dia3 = +e.target.value;
      if (e.target.name === 'dia-4') localStorage.dia4 = +e.target.value;
      if (e.target.name === 'dia-5') localStorage.dia5 = +e.target.value;
      if (e.target.name === 'dia-6') localStorage.dia6 = +e.target.value;
      if (e.target.name === 'dia-7') localStorage.dia7 = +e.target.value;
    });
  }

  inserindoNoGrafico() {
    this.grafico[0].style.height = `${localStorage.dia1}px`;
    this.grafico[1].style.height = `${localStorage.dia2}px`;
    this.grafico[2].style.height = `${localStorage.dia3}px`;
    this.grafico[3].style.height = `${localStorage.dia4}px`;
    this.grafico[4].style.height = `${localStorage.dia5}px`;
    this.grafico[5].style.height = `${localStorage.dia6}px`;
    this.grafico[6].style.height = `${localStorage.dia7}px`;
  }

  meuSaldo() {
    this.saldo.addEventListener('change', (e) => {
      localStorage.saldo = e.target.value;
    });
    this.saldoDisplay.innerText = +localStorage.saldo - this.totalDias;
  }

  totalNesseMes() {
    this.totalMes.innerText = this.totalDias;
  }

  init() {
    this.inserindoNoLocalstorag();

    setInterval(() => {
      this.inserindoNoGrafico();
      this.meuSaldo();
      this.totalNesseMes();
    }, 10);
  }
}

class Display {
  constructor() {
    this.botao = document.querySelector('.botao');
    this.main = document.querySelector('main');
  }

  botaoAnima() {
    this.botao.addEventListener('click', () => {
      this.botao.classList.toggle('active');
      this.main.classList.toggle('active');
    });
  }

  init() {
    this.botaoAnima();
  }
}

const dados = new Dados().init();
const display = new Display().init();
