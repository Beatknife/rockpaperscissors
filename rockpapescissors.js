// game start
// pc get random number between 1-3
// pc choose rps
// user choose rps
// prompt rps
// user chooses
// change string to lowercase
// change string to a number between 1-3
// evaluate the results
// logic chooses round winner
// display a winner message
// count the scores after every round
// play 5 rounds
// display a game winner message

alert ("This is a 'Rock, Paper, Scissors' game played on console. If you are using chrome, you can press F12 to open console. Then, type 'playGame()' to start the game. You will play total of 5 rounds.")

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

    if (human == computer) { // if both chooses same choice its a draw
        console.log("Computer chooses rock. Its a draw!");
        humanScore += 1; // human score +1
        computerScore += 1; // computer score +1
        return "Computer chooses rock. Its a draw!";
    } else {
        
        switch (computer) {

            case 1: // computer chooses rock
                if (human == 2) {
                    console.log("Computer chooses rock. Paper beats rock. You won this round!");
                    humanScore +=1; // human score +1
                    return "Computer chooses rock. Paper beats rock. You won this round!";
                } else if (human == 3) {
                    console.log("Computers chooses rock. Rock beats scissors. You lost this round!");
                    computerScore += 1; // computer score +1
                    return "Computers chooses rock. Rock beats scissors. You lost this round!";
                }
                break
            case 2: // computer chooses paper
                if (human == 1) {
                    console.log("Computer chooses paper. Paper beats rock. You lost this round!");
                    computerScore += 1; // computer score +1
                    return "Computer chooses paper. Paper beats rock. You lost this round!";
                } else if (human == 3) {
                    console.log("Computer chooses paper. Scissors beats paper. You won this round!");
                    humanScore += 1; // human score +1
                    return "Computer chooses paper. Scissors beats paper. You won this round!";
                }
                break
            case 3: // computer chooses scissors
                if (human == 1) {
                    console.log("Computer chooses scissors. Rock beats scissors. You won this round!");
                    humanScore += 1; // human score +1
                    return "Computer chooses scissors. Rock beats scissors. You won this round!";
                } else if (human == 2) {
                    console.log("Computer chooses scissors. Scissors beats paper. You lost this round!");
                    computerScore += 1; // computer score +1
                    return "Computer chooses scissors. Scissors beats paper. You lost this round!";
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
    
    for (let i = 0; i < 5; i++) { // play 5 round
        console.log(playRound()); // play 1 round
        console.log(`Your score: ${humanScore}`); // log human score
        console.log(`Computer score: ${computerScore}`); // log computer score
    }
    winner();

}

function winner () {

    if (computerScore > humanScore) {
        console.log("The computer won. Better luck next time!") // log computer won 
    } else if (computerScore < humanScore) {
        console.log("You won! Congratulations!") // log human won
    } else {
        console.log("Wow, its a tie!") // log tie
    }

}