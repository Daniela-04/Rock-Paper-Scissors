import Score from './Score.js';

const winner = (USel, hSel) => {
  const comb = USel + hSel;
  let result;
  switch (comb) {
    case 'rs':
    case 'pr':
    case 'sp':
      result = 'user';
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      result = 'house';
      break;
    default:
      result = 'draw';
  }

  addWinnerText(result);
};

const addWinnerText = (result) => {
  const resultCont = document.querySelector('.game-choose__result-center');
  const p = document.createElement('p');
  p.classList.add('game-choose__result-text');
  switch (result) {
    case 'user':
      p.textContent = 'YOU WIN';
      Score.addUScore();
      break;
    case 'house':
      p.textContent = 'YOU LOSE';
      Score.subsUScore();
      break;
    case 'draw':
      p.textContent = 'DRAW';
      break;
  }
  p.style.animation = 'fadeIn 1s 1 forwards';
  resultCont.appendChild(p);
};

export default winner;
