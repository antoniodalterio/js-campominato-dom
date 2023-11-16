'use strict';

/* 
Funzioni
*/

// Funzione Creazione elementi nel document

function cellFunction(tag, className, content) {
  const element = document.createElement(tag);
  element.append(content);
  element.classList.add(className);

  // funzione per evento click
  element.addEventListener('click', function () {
    element.classList.toggle('bg-primary');
  });
  return element;
}

function valore(tag) {
  var difficoltaValore = document.querySelector(tag);
  difficoltaValore = difficoltaValore.value;
  return difficoltaValore;
}

/* 
Funzioni
*/

const board = document.querySelector('.board');
let cell = '';
const btnPlay = document.getElementById('bottone-play');

// Ciclo creazione elementi nel document html

// eventoi al click del bottone

btnPlay.addEventListener('click', function (e) {
  board.classList.toggle('d-none');

  var numeroValore = valore('select');
  console.log(numeroValore);

  for (let i = 1; i <= numeroValore; i++) {
    cell = cellFunction('div', 'cell', i);
    board.append(cell);
    console.log(cell);
  }
});
