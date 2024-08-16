
export function menuReglas () {
  const rulesButton = document.querySelector('.rules-button__btn');
  const rulesContainer = document.querySelector('.rules');
  const mainContainer = document.querySelector('.game-choose');
  const closeRulesButton = document.querySelector('#close-rules');

  const toggleRulesContainer = () => {
    rulesContainer.style.display = rulesContainer.style.display === 'grid' ? 'none' : 'grid';
    mainContainer.classList.toggle('disabled');
    rulesButton.style.display = rulesContainer.style.display === 'grid' ? 'none' : 'block';
  };

  rulesButton.addEventListener('click', toggleRulesContainer);
  closeRulesButton.addEventListener('click', toggleRulesContainer);
}
