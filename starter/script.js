'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//document.querySelector('.message').textContent를 리팩토링 하기 위한 함수 생성
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// handlerCheck
const handlerCheck = function () {
  const guess = Number(document.querySelector('.guess').value);
  const scoreNum = document.querySelector('.score');
  const highscoreNum = document.querySelector('.highscore');

  //When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    //When player wins
  } else if (guess === randomNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!'
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //high score
    if (score > highscore) {
      highscore = score;
      highscoreNum.textContent = highscore;
    }
    // 이렇게 하이스코어는 제대로 작동 안함;;
    // if (Number(scoreNum.textContent) > Number(highscoreNum.textContent)) {
    //   document.querySelector('.highscore').textContent =
    //   document.querySelector('.score').textContent;
    // }

    // When guess is wrong -- 1) 리팩토링 후
  } else if (guess !== randomNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > randomNumber ?  '📈 Too high!' : '📉 Too low!'
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!'); //함수, 터너 연산자 사용
      score--;
      scoreNum.textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🎉 Correct Number!'
      displayMessage('💣 You lost the game!');
      scoreNum.textContent = 0;
    }
  }
  // When guess too high -- 1) 리팩토링 전
  // } else if (guess > randomNumber) {
  //   if (score > 1) {
  //     message.textContent = '📈 Too high!';
  //     score--;
  //     scoreNum.textContent = score;
  //   } else {
  //     message.textContent = '💣 You lost the game!';
  //     scoreNum.textContent = 0;
  //   }

  // When guess too low
  // } else if (guess < randomNumber) {
  //   if (score > 1) {
  //     message.textContent = '📉 Too low!';
  //     score--;
  //     scoreNum.textContent = score;
  //   } else {
  //     message.textContent = '💣 You lost the game!';
  //     scoreNum.textContent = 0;
  //   }
  // }
};
document.querySelector('.check').addEventListener('click', handlerCheck);

// handlerAgain
const handlerAgain = function () {
  console.log(
    document.querySelector('.score').textContent,
    document.querySelector('.highscore').textContent
  );
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '';
};
document.querySelector('.again').addEventListener('click', handlerAgain);
