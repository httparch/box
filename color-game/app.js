
const roll_button = document.querySelector('.roll-dice');
const reset_button = document.querySelector('.reset-dice');
const bet_confirm_button = document.querySelector('.done-button');

let input_bet = document.querySelector('.input-bet');

const d1 = document.querySelector('.dice1');
const d2 = document.querySelector('.dice2');
const d3 = document.querySelector('.dice3');

let colors = ['yellow','red','pink','blue','orange','green']
const arr_length = colors.length;

function chooseColor(color){
    let choice = document.querySelector(`.${color}`);

    if(choice.textContent !== 'selected'){
        let choice = document.querySelector(`.${color}`);
        promptBet();
        choice.classList.add(`selected-color`);
        choice.innerHTML = `<p>selected</p>`;
        return;
    }
    choice.classList.remove(`selected-color`);
    choice.innerHTML = ``;
    return;   
}

function promptBet(color){
    document.querySelector('.promptBet').classList.add('reveal');
}

function randomDiceColor(){
    let dices = document.querySelectorAll('.dice-color-result');

    dices.forEach((dice, index) =>{
        dice.classList.add(`${colors[Math.floor(Math.random() * colors.length)]}`) //add remove
    })

}

function resetDice(){
    document.querySelectorAll('.dice-color-result').forEach(dice =>{
        for(let i = 0; i < arr_length; i++){
            dice.classList.remove(`${colors[i]}`) //add remove
        }
    })
}

function confirmButton(){
    let value = input_bet.value;

    if(value === '') {
        return;
    }
    
    document.querySelector('.promptBet').classList.remove('reveal');
}


roll_button.addEventListener('click',() => randomDiceColor());
reset_button.addEventListener('click',() => resetDice());
bet_confirm_button.addEventListener('click', () => confirmButton());