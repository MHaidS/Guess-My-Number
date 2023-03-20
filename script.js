'use strict';
// console.log(document.querySelector('.message').textContent); // Start guessing...

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value); // NOTHING

// if we want to reassign a number to a variable, it has to be a 'let'
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

// 78.3. create variable 'displayMessage' set to a function w/ parameter 'message' & inside the code block, paste in the repeated code then set to 'message' that is passed into the function; let's apply this to 1 of the dupe codes below
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent = `Correct Number!`;
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess); // entered '2' in the input field & '2' was logged on the console when the 'Check!' btn was clicked
  // console.log(typeof guess); // string
  console.log(guess, typeof guess);

  // * WHEN THERE IS NO INPUT
  if (!guess) {
    // 78.4. apply displayMessage() to replace the dupe code & then the string '🚫 No Number!' will now become the argument; do the same w/ the other dupe codes
    // document.querySelector('.message').textContent = '🚫 No Number!';
    displayMessage('🚫 No Number!');
  }
  // * WHEN PLAYER WINS
  else if (guess === secretNumber) {
    // 78.5. replace dupe code
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    displayMessage('🥳 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // 78. Refactoring Our Code: The DRY Principle
  // 78.1. the line of codes for scenarios when guess is either greater or lower than the secretNumber are almost the same, so they need to be refactored; create a new 'else if' stmt w/c is the opposite of the 2nd scenario, when guess is not equal to the secretNumber; transfer the dupe codes w/ if-else stmt wherein ( score > 1 ); use a ternary operater on the part where the message shd either be '📈 Too High!' or '📉 Too Low!'; this way, the 2 scenarios have been unified to only 1 'else-if' stmt; comment out the 2 scenarios for reference purposes
  // 78.2. there are still similar lines of code in this application, so let's start w/ 'document.querySelector('.message').textContent' & create a function for it
  else if (guess !== secretNumber) {
    if (score > 1) {
      // 78.6 refactor; the argument is either '📈 Too High!' or '📉 Too Low!'
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // 78.7. refactor
      // document.querySelector('.message').textContent = '😢 You Lost the Game!';
      displayMessage('😢 You Lost the Game!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

////////////////////////////////////
// 76. CODING CHALLENGE #1
////////////////////////////////////
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach  a click event handler
// 2. In the handler function, restore initial valuesofthe 'score' and 'secretNumber' variables
// 3. Restore the initialconditionsof the message, number, score and guess input fields
// 4. Also restore theoriginalbackgroundcolor(#222)andnumber width (15rem)
// GOOD LUCK 😀
////////////////////////////////////
// * SOLUTION *
////////////////////////////////////
// 76.1. Select the element with the 'again' class and attach  a click event handler
document.querySelector('.again').addEventListener('click', function () {
  // 76.2. In the handler function, restore initial valuesofthe 'score' and 'secretNumber' variables
  score = 20;
  // we do not need to use 'let' bec. we do not want to create a new 'secretNumber' variable; all we want to do when a new game starts is create a new 'secretNumber' & then reassign the variable whenever a player makes a new guess
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // 76.3. Restore the initialconditionsof the message, number, score and guess input fields
  // 78.8. refactor
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // 76.4. Also restore theoriginalbackgroundcolor(#222)andnumber width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
////////////////////////////////////
