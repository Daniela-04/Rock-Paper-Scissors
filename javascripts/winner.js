const winner = (USel, hSel) => {
  const comb = USel + hSel;

  console.log(USel, hSel);
  switch (comb) {
    case 'rs':
    case 'pr':
    case 'sp':
      return 'user';
    case 'sr':
    case 'rp':
    case 'ps':
      return 'house';
    default:
      return 'draw';
  }
};

export default winner;
