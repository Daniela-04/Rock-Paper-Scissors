import menuReglas from './menuReglas.js';
import winner from './winner.js';
menuReglas();
// funcion que gestiona el juego
const game = () => {
  let Usel;
  let Hsel;
  const opciones = document.querySelectorAll('#choose button');
  // evento para escoger una opcion

  // 🛠️ esto necesita otra vuelta, quiza volver al modelo de promesa
  // 🛠️ y crear una cada que se clique un boton
  opciones.forEach((option) => {
    option.addEventListener('click', function () {
      Usel = this;
      // eliminar los botones deseleccionados
      ocultarChoose();
      // mostrar fase dos con la opcion del user solamente
      mostrarWait(Usel);

      // escoger una opcion de la house y asignar la del usuraio
      // 🛠️ la opcion de la house necesita un setimeout
      Usel = Usel.id.charAt(0);
      Hsel = houseSelection();

      // mostrar quien gano el juego
      const win = winner(Usel, Hsel);
      console.log(win);
    });
  });
};

// funcion que escoge una opcion de la house
const houseSelection = () => {
  const opt = ['r', 'p', 's'];
  const num = Math.floor(Math.random() * 3);
  return opt[num];
};
// ocultar el contenedor de las opciones
const ocultarChoose = () => {
  const contChoose = document.getElementById('choose');
  contChoose.style.display = 'none';
};
// mostrar el contenedor de espera
const mostrarWait = (Usel) => {
  const wait = document.getElementById('wait');
  const selected = document.getElementById('selected');

  wait.style.display = 'grid';
  Usel.style.pointerEvents = 'none';
  selected.append(Usel);
};
// inicializar el juego
game();
