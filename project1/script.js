'use strict';

let target = Math.trunc(Math.random() * 100) + 1;
const setMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // player wins
  if (guess === target) {
    setMsg('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#1abc9c';
    document.querySelector('.number').textContent = '!';
    document.querySelector('.number').style.width = '100rem';

    document.querySelector('.highscore').textContent = Math.max(
      document.querySelector('.score').textContent,
      document.querySelector('.highscore').textContent
    );
  }

  // wrong guess
  else {
    setMsg(
      (document.querySelector('.message').textContent = !guess
        ? 'No Number Input!'
        : guess > target
        ? 'Too High!'
        : 'Too Low!')
    );
    if (Number(document.querySelector('.score').textContent))
      document.querySelector('.score').textContent--;
    if (!Number(document.querySelector('.score').textContent))
      setMsg('You Lost!');
  }
  console.log(target);
});

// hit again button and reset errthing
document.querySelector('.again').addEventListener('click', function () {
  target = Math.trunc(Math.random() * 20) + 1;
  setMsg('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#d3d3d3';
  document.querySelector('.guess').value = '';
});
