'use strict';
// console.log(document.querySelector('.message').textContent); // Start guessing...

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent); // Correct Number!

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value); // NOTHING

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value); // 23

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);

  // document.querySelector('.message').textContent = `Correct Number!`;

  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess); // entered '2' in the input field & '2' was logged on the console when the 'Check!' btn was clicked

  // console.log(typeof guess); // string

  console.log(guess, typeof guess); // 2 'number'

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  }
});
