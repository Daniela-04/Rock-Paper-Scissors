const Score = {
  uScore: getCookie('score') || 0,

  addUScore: () => {
    Score.uScore++;
    setCookie('score', Score.uScore);
  },
  subsUScore: () => {
    if (Score.uScore > 0) {
      Score.uScore--;
      setCookie('score', Score.uScore);
    }
  },
  getUScore: () => {
    return Score.uScore;
  }

};

function getCookie (name) {
  const regex = new RegExp(name + '=([^;]*)');
  const match = document.cookie.match(regex);
  return match ? match[1] : null;
}

function setCookie (name, value) {
  document.cookie = name + '=' + value + ';';
}

const updateScore = () => {
  const counter = document.querySelector('.score__points-number');
  counter.textContent = Score.uScore;
};
export default Score;
export { updateScore, getCookie };
