'use strict';

/* 
Funzioni
*/

// Funzione Creazione elementi nel document

function cellFunction(tag, className, content) {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.classList.add('cell');
  element.append(content);

  // funzione per evento click

  element.addEventListener('click', function () {
    let conteggio = 0;
    let conteggioAttivo = true;
    // inclusione bombe
    if (bombeRandom(valore('select')).includes(content)) {
      element.classList.toggle('bg-danger');
      conteggioAttivo = false;
      reset();
      alert(`il tuo punteggio è di ${conteggio}`);
    } // inclusione bombe
    else {
      element.classList.toggle('bg-primary');
      conteggioAttivo = true;
    }
    if (conteggioAttivo) {
      conteggio++;
    }
  });
  return element;
}

// creazione della board

function board(tag) {
  const board = document.querySelector(tag);
  let numeroValore = valore('select');
  const cells = Math.sqrt(numeroValore);
  // ciclo creazione celle
  for (let i = 1; i <= numeroValore; i++) {
    let cell = cellFunction('div', `cell-${cells}`, i);
    board.append(cell);
  }

  return board;
}
// creazione della board

//  funzione valore tag select
function valore(tag) {
  let difficoltaValore = document.querySelector(tag);
  difficoltaValore = difficoltaValore.value;
  return difficoltaValore;
}

//  funzione valore tag select

// funzone reset

function reset() {
  board('.board').innerHTML = '';
}

// funzone reset

// funzione creazione bombe
function bombeRandom(value) {
  const bombe = [];
  while (bombe.length < 16) {
    let numeroRandom = Math.floor(Math.random() * value + 1);
    if (bombe.indexOf(numeroRandom) === -1) {
      bombe.push(numeroRandom);
    }
  }

  return bombe;
}

// funzione creazione bombe

/* 
Funzioni
*/

const btnPlay = document.getElementById('bottone-play');

// eventoi al click del bottone

btnPlay.addEventListener('click', function (e) {
  reset();
  const myBoard = board('.board');
  myBoard.classList.toggle('d-none');
});
