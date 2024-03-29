/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each a pturn, layer rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// import {elements} from "../../complete-javascript-course-master/9-forkify/final/src/js/views/base";
var scores , roundScore , activePlayer  , gamePlay;
init();
var lastRoll ;

document.querySelector('.btn-roll').addEventListener('click',function () {

    if (gamePlay)
    {
        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice +'.png';

        if (dice === 6 && lastRoll === 6)
        {
            scores[activePlayer] = 0;
            document.querySelector('#score-'+ activePlayer).textContent = '0';
            nextPlayer();
        }
        else
        {
            if (dice !== 1)
            {
                roundScore += dice;
                document.querySelector('#current-'+activePlayer).textContent = roundScore;
            }
            else
            {
                nextPlayer();

            }
        }
        lastRoll = dice;

    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlay)
    {
        //adding current score to global score

        scores[activePlayer] += roundScore;

        // UI - displaying global score on update
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('#final-score').value;
        var finalScore;
        console.log(input);
        if (input)
        {
            finalScore = input;
        }
        else {
            finalScore = 100;
        }
        // Diciding the Winner

        if (scores[activePlayer] >= finalScore)
        {
            document.querySelector('#name-'+ activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlay = false;

        }
        else {
            nextPlayer();

        }

    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // document.querySelector('#current-1')
    roundScore = 0;
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').textContent = 'none';
}

// Creating New Game

document.querySelector('.btn-new').addEventListener('click',init);


function init() {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlay = true;
//dice = Math.floor(Math.random() * 6 ) + 1;
//
// document.querySelector('#current-' + activePlayer).textContent = dice ;
//
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}