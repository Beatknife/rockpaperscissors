// first pc should choose rps
// then human should choose rps
// the return values should be evaluated
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
    prompt("Rock? Paper? Scissors?")
}

