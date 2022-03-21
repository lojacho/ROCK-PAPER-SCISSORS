function computerPlay (){

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() *choices.length)];
    return computerChoice; 
}
const computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
    switch (playerSelection){
        case 'rock':
            if (computerSelection == 'rock'){ alert(`EMPATE ${playerSelection} es igual ${computerSelection}`);}
            else if (computerSelection == 'paper'){ alert(`PERDISTE ${playerSelection} pierde contra ${computerSelection}`);}
            else { alert(`GANASTE ${playerSelection} gana a ${computerSelection}`);} 
            break;  
        case 'paper':
            if (computerSelection == 'rock'){ alert(`GANASTE ${playerSelection} gana a ${computerSelection}`);}
            else if (computerSelection == 'paper'){ alert(`EMPATE ${playerSelection} es igual ${computerSelection}`);}
            else { alert(`PERDISTE ${playerSelection} pierde contra ${computerSelection}`);} 
            break;  
        case 'scissors':
            if (computerSelection == 'rock'){ alert(`PERDISTE ${playerSelection} pierde contra ${computerSelection}`);}
            else if (computerSelection == 'paper'){ alert(`GANASTE ${playerSelection} gana a ${computerSelection}`);}
            else { alert(`EMPATE ${playerSelection} es igual ${computerSelection}`);} 
            break; 
        default:
        alert(`opcion no es correcta`);
            }
    
}

for (let i = 0; i < 5; i++) {
    var playerSelection = window.prompt('rock,scissors,paper')
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    
 }
