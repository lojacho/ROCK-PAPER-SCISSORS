function computerPlay (){

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() *choices.length)];
    return computerChoice; 
}

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('.result');
    const countPlayerDisplay = document.querySelector('.countPlayerDisplay');
    const countComputerDisplay = document.querySelector('.countComputerDisplay');
    switch (playerSelection){
        case 'rock':
            if (computerSelection == 'rock'){ result.textContent =`EMPATE ${playerSelection} es igual ${computerSelection}`;}
            else if (computerSelection == 'paper'){ result.textContent =`PERDISTE ${playerSelection} pierde contra ${computerSelection}`;
            countComputer=countComputer+1;
            countComputerDisplay.textContent =`Marcador Computador =  ${countComputer}`;}
            else { result.textContent =`GANASTE ${playerSelection} gana a ${computerSelection}`;
            countPlayer=countPlayer+1;
            countPlayerDisplay.textContent =`Marcador Jugador =  ${countPlayer}`;} 
            break;  
        case 'paper':
            if (computerSelection == 'rock'){ result.textContent =`GANASTE ${playerSelection} gana a ${computerSelection}`;
            countPlayer=countPlayer+1;
            countPlayerDisplay.textContent =`Marcador Jugador =  ${countPlayer}`;}
            else if (computerSelection == 'paper'){ result.textContent =`EMPATE ${playerSelection} es igual ${computerSelection}`;}
            else { result.textContent =`PERDISTE ${playerSelection} pierde contra ${computerSelection}`;
            countComputer=countComputer+1;
            countComputerDisplay.textContent =`Marcador Computador =  ${countComputer}`;} 
            break;  
        case 'scissors':
            if (computerSelection == 'rock'){ result.textContent =`PERDISTE ${playerSelection} pierde contra ${computerSelection}`;
            countComputer=countComputer+1;
            countComputerDisplay.textContent =`Marcador Computador =  ${countComputer}`;}
            else if (computerSelection == 'paper'){ result.textContent =`GANASTE ${playerSelection} gana a ${computerSelection}`;
            countPlayer=countPlayer+1;
            countPlayerDisplay.textContent =`Marcador Jugador =  ${countPlayer}`;}
            else { result.textContent =`EMPATE ${playerSelection} es igual ${computerSelection}`;} 
            break; 
        default:
        alert(`opcion no es correcta`);
            }
    
}

let countPlayer=0;
let countComputer=0;

/*for (let i = 0; i < 5; i++) {
    var playerSelection = window.prompt('rock,scissors,paper')
    playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (i == 4){
        (countPlayer>countComputer)? alert(`WIN ${countPlayer} vs ${countComputer}`):alert(`LOOSE ${countPlayer} vs ${countComputer} `);
    }
 }*/
 
 const buttons = document.querySelectorAll('button');
 buttons.forEach((button) => {
    button.addEventListener('click', () => {
      var playerSelection = button.id;
      var computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
      if (countPlayer == 5 || countComputer ==5 ){
        (countPlayer>countComputer)? alert(`WIN ${countPlayer} vs ${countComputer}`):alert(`LOOSE ${countPlayer} vs ${countComputer} `);
    }
    });
  }); 
