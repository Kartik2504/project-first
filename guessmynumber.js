'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//  document.querySelector(".number").textContent=secretNumber;
let score = 20;
let highscore = 0;
//console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent = 'Correct!!🎉';
  //console.log( guess);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number❌';
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }

  // When guess is too high
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'TOO HIGH ⬆' : 'TOO LOW ⬇';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score == 1) {
      //document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent =
        'You have lost the game 💥';
    }
  }
});

/* else if(guess>secretNumber){
    if(score>1){
    document.querySelector('.message').textContent = 'TOO HIGH ⬆';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'You have lost the game 💥';
    }
   }
*/
// When guess is too low

/*else if(guess<secretNumber){
    if(score>1){
        document.querySelector('.message').textContent = 'TOO LOW ⬇';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You have lost the game 💥';
        }
    
   }*/

// reset the game.

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //console.log(secretNumber);
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});




/*"use strict";
/*console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'let the party begin';
//document.getElementById('message').innerHTML = "let the party begin";
console.log(document.querySelector(".number").textContent);
document.querySelector(".score").textContent=86;
//document.querySelector(".number").textContent='❤';
document.querySelector(".guess").value=55;
console.log(document.querySelector(".guess").value);
    

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//  document.querySelector(".number").textContent=secretNumber;
let score = 20;
let highscore = 0;
//console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //document.querySelector('.message').textContent = 'Correct!!🎉';
  //console.log( guess);
  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number❌";
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // When guess is too high
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "TOO HIGH ⬆" : "TOO LOW ⬇";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score == 1) {
      //document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".message").textContent =
        "You have lost the game 💥";
    }
  }
});

/* else if(guess>secretNumber){
    if(score>1){
    document.querySelector('.message').textContent = 'TOO HIGH ⬆';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'You have lost the game 💥';
    }
   }
*/
// When guess is too low

/*else if(guess<secretNumber){
    if(score>1){
        document.querySelector('.message').textContent = 'TOO LOW ⬇';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You have lost the game 💥';
        }
    
   }

// reset the game.

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //console.log(secretNumber);
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
*/