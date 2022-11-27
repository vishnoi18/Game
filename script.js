'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// FOR ENABLING THE SYSTEM TO GENERATE A RANDOM NUMBER

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Not Valid Please Enter a Number!!!';
  }
  //When Player Wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Congrats For Correct Answer!';
    score--;
    console.log((document.querySelector('.score').textContent = score));
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When the guessed number is grater than secretNumber
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Enter a smaller Number';
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      document.querySelector('.message').textContent =
        'Sorry You Lost the Game';
      console.log((document.querySelector('.score').textContent = 0));
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //When the guessed number is less than the secretNumber
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Enter a Grater Number';
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      document.querySelector('.message').textContent =
        'Sorry You Lost the Game';
      console.log((document.querySelector('.score').textContent = 0));
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.highscore').textContent = '0';
});
