const options = ['r', 'p', 's'];

function houseSel () {
  const random = Math.floor(Math.random() * 3);
  return options[random];
}

function houseSelButton (sel) {
  const selectionMap = {
    r: 'rock',
    p: 'paper',
    s: 'scissors'
  };

  const mappedSelection = selectionMap[sel];
  if (mappedSelection) {
    const buttonClass = `game-choose__option game-choose__option--${mappedSelection} game-choose__option--disabled`;
    const buttonImgSrc = `images/icon-${mappedSelection}.svg`;
    const buttonImgAlt = mappedSelection;
    const button = document.createElement('button');
    button.classList.add(...buttonClass.split(' '));
    button.setAttribute('data-option', sel);
    button.innerHTML = `<img class="button-option__img" src="${buttonImgSrc}" alt="${buttonImgAlt}">`;

    return button;
  }

  return null;
}

export { houseSel, houseSelButton };
