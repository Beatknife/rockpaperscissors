// game start
// pc get random number between 1-3
// pc choose rps
// user choose rps
// prompt rps
// user chooses
// change string to lowercase
// change string to a number between 1-3
// evaluate the results
// logic chooses winner
// display a winner message
// count the scores after every round
// restart the game

alert ("Type 'playRound()' to start the game.")

function getComputerChoice () {
    
    const number = Math.floor(Math.random() * 3 + 1); // pc choose random number
    
    switch (number) {
        
        case 1: // pc choose rock
            return 1
        case 2: // pc choose paper
            return 2
        case 3: // pc choose scissors
            return 3
    }
}

function getHumanChoice () {

    let humanAnswer = prompt("Type 'Rock', 'Paper' or 'Scissors'."); // ask humans choice
    humanAnswer = humanAnswer.toLowerCase(); // change input to lowercase

    if (humanAnswer == "rock") {
        return 1 // human choose rock
    } else if (humanAnswer == "paper") {
        return 2 // human choose paper
    } else if (humanAnswer == "scissors") {
        return 3 // human choose scissors
    } else { 
        alert("You can only type 'Rock', 'Paper' or 'Scissors'. Type 'playRound' to play again. ") // invalid choice
    }
}

function evaluateResult (human, computer) {

    if (human == computer) {
        console.log("Computer chooses rock. Its a draw!");
        humanScore += 1;
        computerScore += 1;
        return "Computer chooses rock. Its a draw!";
    } else {
        switch (computer) {

            case 1: // computer chooses rock
                if (human == 2) {
                    console.log("Computer chooses rock. Paper beats rock. You won!");
                    humanScore +=1;
                    return "Computer chooses rock. Paper beats rock. You won!";
                } else if (human == 3) {
                    console.log("Computers chooses rock. Rock beats scissors. You lose!");
                    computerScore += 1;
                    return "Computers chooses rock. Rock beats scissors. You lose!";
                }
                break
            case 2: // computer chooses paper
                if (human == 1) {
                    console.log("Computer chooses paper. Paper beats rock. You lose!");
                    computerScore += 1;
                    return "Computer chooses paper. Paper beats rock. You lose!";
                } else if (human == 3) {
                    console.log("Computer chooses paper. Scissors beats paper. You won!");
                    humanScore += 1;
                    return "Computer chooses paper. Scissors beats paper. You won!";
                }
                break
            case 3: // computer chooses scissors
                if (human == 1) {
                    console.log("Computer chooses scissors. Rock beats scissors. You won!");
                    humanScore += 1;
                    return "Computer chooses scissors. Rock beats scissors. You won!";
                } else if (human == 2) {
                    console.log("Computer chooses scissors. Scissors beats paper. You lose!");
                    computerScore += 1;
                    return "Computer chooses scissors. Scissors beats paper. You lose!";
                }
                break
            default:
                console.log("Invalid choice")
        }
    }
}

function playRound() {
    
    let humCho = getHumanChoice(); // get human choice
    let comCho = getComputerChoice(); // get computer choice
    evaluateResult (humCho, comCho); // evaluate results

}

let humanScore = 0;
let computerScore = 0;

function playGame () {
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    winner();

}

function winner () {

    if (computerScore > humanScore) {
        console.log("The computer won. Better luck next time!") 
    } else if (computerScore < humanScore) {
        console.log("You won! Congratulations!")
    } else {
        console.log("Wow, its a tie!")
    }
}