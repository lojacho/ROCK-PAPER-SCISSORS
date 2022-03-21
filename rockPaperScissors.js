function computerPlay (){

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() *choices.length)];
    return computerChoice; 
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection){
        case 'rock':
            if (computerSelection == 'rock'){ alert(`EMPATE ${playerSelection} es igual ${computerSelection}`);}
            else if (computerSelection == 'paper'){ alert(`PERDISTE ${playerSelection} pierde contra ${computerSelection}`);
            countComputer=countComputer+1;}
            else { alert(`GANASTE ${playerSelection} gana a ${computerSelection}`);
            countPlayer=countPlayer+1;} 
            break;  
        case 'paper':
            if (computerSelection == 'rock'){ alert(`GANASTE ${playerSelection} gana a ${computerSelection}`);
            countPlayer=countPlayer+1;}
            else if (computerSelection == 'paper'){ alert(`EMPATE ${playerSelection} es igual ${computerSelection}`);}
            else { alert(`PERDISTE ${playerSelection} pierde contra ${computerSelection}`);
            countComputer=countComputer+1;} 
            break;  
        case 'scissors':
            if (computerSelection == 'rock'){ alert(`PERDISTE ${playerSelection} pierde contra ${computerSelection}`);
            countComputer=countComputer+1;}
            else if (computerSelection == 'paper'){ alert(`GANASTE ${playerSelection} gana a ${computerSelection}`);
            countPlayer=countPlayer+1;}
            else { alert(`EMPATE ${playerSelection} es igual ${computerSelection}`);} 
            break; 
        default:
        alert(`opcion no es correcta`);
            }
    
}

let countPlayer=0;
let countComputer=0;

for (let i = 0; i < 5; i++) {
    var playerSelection = window.prompt('rock,scissors,paper')
    playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (i == 4){
        (countPlayer>countComputer)? alert(`WIN ${countPlayer} vs ${countComputer}`):alert(`LOOSE ${countPlayer} vs ${countComputer} `);
    }
 }
