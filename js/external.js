function getComputerChoice() {
    //Place Rock Paper Scissors Inside of String Array
    const selections = ["Rock", "Paper", "Scissors"];
    
    //Obtain Randomize that can get an index between 0 and 2
   
    /*console.log(Math.floor((Math.random() * 100) % 3));*/

    //Based on randomized selections return the string associated
    return selections[Math.floor((Math.random() * 100) % 3)];
}

function playRound(playerSelection, computerSelection) {
    const player_lowercase = playerSelection.toLowerCase();
    const computer_lowercase = computerSelection.toLowerCase();
    switch (player_lowercase) {
        case "rock":
            if (computer_lowercase == "scissors") {
                return "won"
            } else if (computer_lowercase == "paper") {
                return "lost"
            }
            else {
                return "tied"
            }
        break;
        case "paper":
            if (computer_lowercase == "rock") {
                return "won"
            } else if (computer_lowercase == "scissors") {
                return "lost"
            }
            else {
                return "tied!"
            }
        break;
        case "scissors":
            if (computer_lowercase == "paper") {
                return "won"
            } else if (computer_lowercase == "rock") {
                return "lost"
            }
            else {
                return "tied"
            }
        break;
    }
}

function game() {
    let player_score = 0;
    let computer_score = 0;
    for(let i = 0; i < 5; i++) {
        let result = playRound(prompt("What's your choice? Rock, Paper, or Scissors?"), getComputerChoice());
        if (result == "won") {
            player_score++;
        } else if (result == "lost") {
            computer_score++;
        }
    }
    if (player_score > computer_score) {
        return "You won!"
    } else if (computer_score > player_score) {
        return "You lost!"
    }
    return "You tied!"
}