'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const cur0El = document.getElementById('current--0');
const cur1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const bNew = document.querySelector('.btn--new');
const bRoll = document.querySelector('.btn--roll');
const bHold = document.querySelector('.btn--hold');
let curScore = 0;
let activePlayer = 0;
let playing = true;
const scores = [0, 0];
const switchPlayers = function () {
  eval('cur' + activePlayer + 'El').textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer ^= 1;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  curScore = 0;
};

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

bRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      curScore += dice;
      eval('cur' + activePlayer + 'El').textContent = curScore;
    } else switchPlayers();
  }
});

bHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += curScore;
    eval('score' + activePlayer + 'El').textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else switchPlayers();
  }
});

bNew.addEventListener('click', function () {
  curScore = 0;
  playing = true;

  diceEl.classList.add('hidden');
  for (let i in [0, 1]) {
    scores[0] = 0;
    scores[1] = 0;
    eval('cur' + i + 'El').textContent = 0;
    eval('score' + i + 'El').textContent = 0;
  }
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
