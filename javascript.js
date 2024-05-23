// first pc should choose rps
// generate random number between 1,2,3
// assign numbers to rps
// human should choose rps
// input should be a number between 1,2,3
// logic should evaluate both number
// logic determines who won and displays a message

function getComputerChoice () {

    const number = Math.floor(Math.random() * 3 + 1);

    switch (number) {

        case 1: // console.log("Computer select rock");
            return 1;
        case 2: // console.log("Computer select paper");
            return 2;
        case 3: // console.log("Computer select scissors");
            return 3;
    }
}

function getHumanChoice () {

    let humanAnswer = prompt("Type 'Rock', 'Paper' or 'Scissors'.");
    humanAnswer = humanAnswer.toLowerCase();
    
    if (humanAnswer == "rock") { 
        // console.log("Human select rock");
        return 1
    } else if (humanAnswer == "paper") {
        // console.log("Human select paper");
        return 2
    } else if (humanAnswer == "scissors") {
        // console.log("Human select scissors");
        return 3
    } else {
        alert("You can only type 'Rock', 'Paper or 'Scissors'.");
    }
}

function evaluateResult (humanChoice, computerChoice) {
    
    console.log("Computers choice: " + computerChoice);
    console.log("Humans choice: " + humanChoice);
    
    if (humanChoice == computerChoice) {
        console.log("Draw");
    }
    else {
        switch (computerChoice) {
            case 1: // Computer selects rock 
                if(humanChoice == 2){  // Human selects paper 
                    console.log("Human won");
                }
                else if(humanChoice == 3){ // Human selects scissors 
                    console.log("Computer won");
                }
                break
            case 2: // Computer selects paper
                if(humanChoice == 1){  // Human selects rock 
                    console.log("Computer won");
                }
                else if(humanChoice == 3){ // Human selects scissors 
                    console.log("Human won");
                }
                break
            case 3: // Computer selects scissors
                if(humanChoice == 2){  // Human selects paper 
                    console.log("Computer won");
                }
                else if(humanChoice == 1){ // Human selects rock 
                    console.log("Human won");
                }
                break
            default:
                console.log("Invalid Selections, hu:" + humanChoice + " com: " + computerChoice);
                break

        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound () {
    
    let compCho = getComputerChoice();
    let humCho = getHumanChoice();
    evaluateResult(humCho, compCho);

}

function playGame () {
    
}