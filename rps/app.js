//display
const display_result = document.querySelector('.win-lose-tie');

//scores
const win_score = document.querySelector('.win-score');
const lose_score = document.querySelector('.lose-score');

//user
const player_move = document.querySelector('.player-move');
const computer_move = document.querySelector('.computer-move');

//buttons move
let moves = ['r', 'p', 's'];
let isAutoPlaying = false;
let id;
//game object

const score =localStorage.getItem('score');
const game =  score ? JSON.parse(score) : {player_score:0,computer_score:0};


let buttons = document.querySelectorAll('.button-move');
    buttons.forEach((button,index)=>{
        button.addEventListener('click',()=>{
            checkGameResult(`${moves[index]}`);
        })
    });

//other button
const reset_button = document.querySelector('.reset-score');
const auto_button = document.querySelector('.auto-play');

//methods

function checkGameResult(move){
    let playerMove = move;
    let computerMove = generateComputerMove();
    let result = '';

    if(playerMove === 'r'){
        if(computerMove === 'p'){game.computer_score++; result = `You lose!`}
        else if(computerMove === 's'){game.player_score++; result = `You win!`}
    }else if(playerMove === 's'){
        if(computerMove === 'p'){game.player_score++;  result = `You win!`}
        else if(computerMove === 'r'){game.computer_score++; result = `You lose!`}
    }else if(playerMove === 'p'){
        if(computerMove === 's'){game.computer_score++; result = `You lose!`}
        else if(computerMove === 'r'){game.player_score++; result = `You win!`}
    }

    localStorage.setItem('score',JSON.stringify(game));
    
    display_result.innerHTML = `${result}`;

    player_move.innerHTML = `<img src="images/${playerMove}.png" alt="">`
    computer_move.innerHTML = `<img src="images/${computerMove}.png" alt="">`

    win_score.innerHTML = `${game.player_score}`
    lose_score.innerHTML = `${game.computer_score}`
}

function generateComputerMove(){
    let computerMove = Math.random();

    if(computerMove > 0 && computerMove < 1/3) {return 'r'}
    else if(computerMove > 1/3 && computerMove < 2/3) {return 'p'}
    else {return 's'};
}

function reset_score(){
    game.player_score = 0;
    game.computer_score = 0;

    win_score.innerHTML = `0`;
    lose_score.innerHTML = `0`;

    localStorage.removeItem('score')
}

function auto(){
    generateComputerMove();
    checkGameResult(generateComputerMove());
}

function auto_play(){
    if(!isAutoPlaying){
        id = setInterval(() => auto(), 1000);
        auto_button.innerHTML = `Stop-Play`;
        isAutoPlaying = true;
    }else{
        auto_button.innerHTML = `Auto-Play`;
        clearInterval(id);
        isAutoPlaying = false;
    }
}

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        checkGameResult('r');
    }else if(event.key === 's'){
        checkGameResult('s')
    }else if(event.key === 'p'){
        checkGameResult('p')
    }
})

reset_button.addEventListener('click', () => reset_score());
auto_button.addEventListener('click', () =>auto_play());