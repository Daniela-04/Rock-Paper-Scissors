import { handleGameChooseClick } from './uSel.js';
import { houseSel, houseSelButton } from './houseSel.js';
import { menuReglas } from './menuReglas.js';
import winner from './winner.js';
import { updateScore, getCookie } from './Score.js';

// inicializar el juego y añadir el boton del usuario
const initGameChoose = () => {
  const contenedorIni = document.querySelector('.game-choose');
  const contenedorRes = document.querySelector('.game-choose__result-you');
  let botonClickeado = null;
  contenedorIni.addEventListener('click', (e) => {
    botonClickeado = handleGameChooseClick(e);
    if (botonClickeado !== null) {
      hideOtherButtons();
      const opcion = botonClickeado;
      opcion.classList.add('game-choose__option--disabled');
      opcion.style.animation = 'fadeIn 1s 1 forwards';
      contenedorRes.appendChild(opcion);
      animacionCarga();
    }
  });
};
// inicializar el contador
const initCounter = () => {
  const counter = document.querySelector('.score__points-number');
  counter.textContent = getCookie('score') || 0;
};

// ocultar el resto de botones luego de que el usuario elija
const hideOtherButtons = () => {
  const contenedor = document.querySelector('.game-choose');
  contenedor.style.display = 'none';
};

// esperar a que la maquina elija
const animacionCarga = () => {
  const carga = document.querySelector('.carga');
  const circle1 = document.querySelector('.carga__circle1');
  carga.style.animation = 'fadeIn 1s 1 forwards';
  circle1.style.animation = 'pulse 3s 3';
  circle1.addEventListener('animationend', () => {
    carga.style.animation = 'fadeOut 1s 1 forwards';
  });
  showResultCont();
};

// mostrarn contenedor de resultados y agregar boton de la maquina

const showResultCont = () => {
  const contenedor = document.querySelector('.game-choose__result');
  contenedor.style.display = 'flex';
  setTimeout(addHouseSel, 4000);
};

const addHouseSel = () => {
  const resultCont = document.querySelector('.game-choose__result-house');
  const carga = document.querySelector('.carga');
  const hSel = houseSel();
  const button = houseSelButton(hSel);

  if (button !== null) {
    setTimeout(() => {
      if (carga) {
        resultCont.removeChild(carga);
      }
      button.style.animation = 'fadeIn 1s 1 forwards';
      resultCont.appendChild(button);
    }, 500);
  }
  setTimeout(handlewin, 1000);
};

// ver quien gano, actualizar el puntaje en consecuencia

const handlewin = () => {
  let user = document.querySelector('.game-choose__result-you > button').getAttribute('id');
  user = user.charAt(0);
  const house = document.querySelector('.game-choose__result-house > button').getAttribute('data-option');
  winner(user, house);
  updateScore();
  setTimeout(addPlayAgainButton, 1000);
};

//  añadir boton de volver a jugar

const addPlayAgainButton = () => {
  const contenedor = document.querySelector('.game-choose__result-center');
  const button = document.createElement('button');
  button.classList.add('button', 'game-choose__result-btn');
  button.textContent = 'PLAY AGAIN';
  button.style.animation = 'fadeIn 1s 1 forwards';
  contenedor.appendChild(button);

  button.addEventListener('click', () => {
    window.location.reload();
  });
};

// main function

function main () {
  menuReglas();
  initCounter();
  initGameChoose();
}

main();
