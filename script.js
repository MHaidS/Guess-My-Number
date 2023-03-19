'use strict';
// console.log(document.querySelector('.message').textContent); // Start guessing...

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent); // Correct Number!

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value); // NOTHING

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent = `Correct Number!`;
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess); // entered '2' in the input field & '2' was logged on the console when the 'Check!' btn was clicked
  // console.log(typeof guess); // string
  console.log(guess, typeof guess); // 2 'number'

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the Game!';
      score--;
      document.querySelector('.score').textContent = score;
      // .....OR.......
      // document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the Game!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
