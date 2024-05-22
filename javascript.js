// first pc should choose rps
// generate random number between 1,2,3
// assign numbers to rps
// human should choose rps
// input should be a number between 1,2,3
// logic should evaluate both number
// logic determines who won and displays a message

function getRandomNumber () {
    return Math.floor(Math.random() * 3 + 1);
}

function getComputerChoice () {

    switch(getRandomNumber()) {
        
        case 1:
            console.log("rock");
            break

        case 2:
            console.log("paper");
            break

        case 3:
            console.log("scissors");
            break
    }
}

function getHumanChoice () {

    let human = prompt("Rock? Paper? Scissors?").toLowerCase();
    
    if (human == "Rock") {
        return rock
    }

    if (human == "Paper") {
        return paper
    }

    if (human == "Scissors") {
        return scissors
    }
}

function playRound (humanChoice, computerChoice) {
    
    switch (getComputerChoice()) {
        case rock:
            if (rock == 1) {
                alert("Draw")
            } else if (rock == 2) {
                alert("The computer won.")
            } else {
                alert("You won!")
            }
            break

        case paper:
            if (paper == 2) {
                alert("Draw")
            } else if (paper == 3) {
                alert("The computer won.")
            } else {
                alert("You won!")
            }
            break

        case scissors:
            if (scissors == 3) {
                alert("Draw")
            } else if (scissor == 1) {
                alert("The computer won.")
            } else {
                alert("You won!")
            }
            break

    }
}