const myMoveRock = document.getElementById('myRock');
const myMovePaper = document.getElementById('myPaper');
const myMoveScissor = document.getElementById('myScissor');
myMoveRock.addEventListener('click', function() {playerMove("Rock")});
myMovePaper.addEventListener('click',function() {playerMove("Paper")});
myMoveScissor.addEventListener('click',function() {playerMove("Scissor")});

function playerMove(yourMove){
    const opponentMove = computerMove();
    compareMove(yourMove,opponentMove);
}
let computermove = '';
function computerMove(){
    let randNumb = Math.random();
    
        if(randNumb>=0 && randNumb<1/3){
        computermove = "Rock";
        }
        if(randNumb>=1/3 && randNumb<2/3){
        computermove = "Paper";
        }
        if(randNumb>=2/3 && randNumb<=1){
        computermove = "Scissor";
        }
   return computermove;
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
 
function compareMove(player,computer){
   if(player === computer){
    document.querySelector('.results').innerHTML ="Its a tie";
    score.ties +=1;
   }
   else if((player === "Rock"  && computer === "Scissor") || (player === "Paper"  && computer === "Rock") || (player === "Scissor"  && computer === "Paper")){
    document.querySelector('.results').innerHTML = "You won";
    score.wins += 1;
   }   
   else{
    document.querySelector('.results').innerHTML = "You lose";
    score.losses += 1;
   }                
   localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.results').innerHTML = `you won ${score.wins} times, lost ${score.losses} times, and tied ${score.ties} times!!!`;
}

const scoreReset = document.getElementById('reset_score');

scoreReset.addEventListener('click', clear);

function clear(){
    score.ties = 0;
    score.wins = 0;
    score.losses = 0;
    localStorage.removeItem('score');
    document.querySelector('.results').innerHTML = `you won ${score.wins} times, lost ${score.losses} times, and tied ${score.ties} times!!!`;
}
