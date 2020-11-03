/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. 
Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
After that, it's the next player's turn
- The player can choose to 'Hold',
which means that his ROUND score gets added to his GLBAL score.
 After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundscore,ap,gp;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
        if(gp){
               //1.Random Number
        var dice = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

 
        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundscore += dice;
            document.querySelector('#current-' + ap).textContent = roundscore;
        } else {
            //Next player
            nextplayer();
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gp){
        //Add current score to global score
    scores[ap]+=roundscore;
    //update UI
    document.querySelector('#score-'+ap).textContent=scores[ap];
    //Check if player won
    if(scores[ap]>=100){
        document.querySelector('#name-'+ap).textContent='Winner';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+ap+'-panel').classList.add('winner');
        document.querySelector('.player-'+ap+'-panel').classList.remove('active');
        gp=false;
    }else{   
    //next player
    nextplayer();
    }
    }
});
document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    scores=[0,0];
    roundscore=0;
    ap=0;
    document.querySelector('.dice').style.display='none';
    //Make all the value to 0 by using id selector
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
function nextplayer(){
    ap===0?ap=1:ap=0;
    roundscore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');  
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active'); 
    document.querySelector('.dice').style.display='none';

}