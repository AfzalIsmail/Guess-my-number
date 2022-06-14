'use strict';

/*
console.log(document.querySelector('.message').textContent); 

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/

// random number that has to be guessed between 1 and 20
let secretNumber = Math.trunc(Math.random()*20) + 1;

// score value
let score = 20;

// high score value
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);

    // when no number is in the input
    if(!guess){

        // document.querySelector('.message').textContent = '🚫 Guess field is empty!';
        displayMessage('🚫 Guess field is empty!');

    // when player wins
    }else if(guess === secretNumber){

        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(highScore < score){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // when guess is wrong
    }else if(guess !== secretNumber){

        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Value too high!' : '📉 Value too low!';
            displayMessage(guess > secretNumber ? '📈 Value too high!' : '📉 Value too low!');
            score --;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = '💥 You lost!';
            displayMessage('💥 You lost!');
            document.querySelector('.score').textContent = 0;
        }

    }
    // when guess is too high
    // else if(guess > secretNumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Value too high!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You lost!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // // when guess is too low
    // }else if(guess < secretNumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Value too low!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You lost!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});

// restart game and reset values
document.querySelector('.again').addEventListener('click', function(){

    // reset score
    score = 20;
    // reset value of secret number
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    // reset message
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    // reset secret number to '?'
    document.querySelector('.number').textContent = '?';
    // reset score
    document.querySelector('.score').textContent = score;
    // reset guess input field
    document.querySelector('.guess').value = null;

    // reset background color
    document.querySelector('body').style.backgroundColor = '#222';
    // reset number area to original width
    document.querySelector('.number').style.width = '15rem';
    
});

const displayMessage = function (message) { 
    document.querySelector('.message').textContent = message;
}


