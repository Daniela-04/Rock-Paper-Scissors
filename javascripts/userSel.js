export const handleGameChooseClick = (e) => {
  const botonClickeado = e.target.closest('button');
  // const ids = ['rock', 'paper', 'scissors'];
  if (botonClickeado) {
    return botonClickeado;
  }
  return null;
};
