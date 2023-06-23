function getComputerChoice() {
    //Place Rock Paper Scissors Inside of String Array
    const selections = ["Rock", "Paper", "Scissors"];
    
    //Obtain Randomize that can get an index between 0 and 2
   
    /*console.log(Math.floor((Math.random() * 100) % 3));*/

    //Based on randomized selections return the string associated
    return selections[Math.floor((Math.random() * 100) % 3)];
}

function playRound(event) {

    const playerSelection = event.target.innerHTML;
    const computerSelection = getComputerChoice();
    const player_lowercase = playerSelection.toLowerCase();
    const computer_lowercase = computerSelection.toLowerCase();
    switch (player_lowercase) {
        case "rock":
            if (computer_lowercase == "scissors") {
                changeScore(event, "won");
            } else if (computer_lowercase == "paper") {
                changeScore(event, "lost");
            }
            else {
                return "tied"
            }
        break;
        case "paper":
            if (computer_lowercase == "rock") {
                changeScore(event, "won");
            } else if (computer_lowercase == "scissors") {
                changeScore(event, "lost");
            }
            else {
                return "tied!"
            }
        break;
        case "scissors":
            if (computer_lowercase == "paper") {
                changeScore(event, "won");
            } else if (computer_lowercase == "rock") {
                changeScore(event, "lost");
            }
            else {
                return "tied"
            }
        break;
    }
}
function changeScore(event, result) {
    if (result == "won") {
        const player_score = document.querySelector(".player_score");
        let updated_score = (parseInt(player_score.textContent)) + 1;
        player_score.textContent = updated_score.toString();
    } else if (result == "lost") {
        const opp_score = document.querySelector(".opp_score");
        let updated_score = (parseInt(opp_score.textContent)) + 1;
        opp_score.textContent = updated_score.toString();
    }
}



//addAudio after play button
function addAudio() {
    const audio = document.querySelector("audio");
    audio.play();
    console.log("playing");
}

//Remove audio after pressing Play
function removeAudio() {
    const audio = document.querySelector("audio");
    audio.pause();
}

//Remove all of the nodes in the area to make game
function removeAllChildNodes() {
    let parent = document.querySelector(".main-content");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Transition to show GameUI
function Transition() {
    //Remove the audio and change DOM elements
    setTimeout(removeAudio, 8000);
    //Take out the nodes once the music is finished
    setTimeout(removeAllChildNodes, 6000);
    setTimeout(GameUi, 6000);
}

function AddScoreNodes() {
     //Create overall div
     const div_holder = document.createElement("div");

     //User score information
     const user_score = document.createElement("div");
     user_score.textContent = "Player";
     const number_user = document.createElement("p");
     const number = document.createTextNode("0");
     number_user.appendChild(number);
     number_user.classList.add("player_score");
     number_user.style.marginTop = "10px";
     user_score.appendChild(number_user);

     //Opponent score information
     const opponent_score = document.createElement("div");
     opponent_score.textContent = "CPU";
     const number_opponent = document.createElement("p");
     const number_opp = document.createTextNode("0");
     number_opponent.appendChild(number_opp);
     number_opponent.classList.add("opp_score");
     number_opponent.style.marginTop = "10px";
     opponent_score.append(number_opponent);
    
    //Append to overall div
    div_holder.appendChild(user_score);
    div_holder.appendChild(opponent_score);

 
     //Append to the main-container
     const main_container = document.querySelector(".main-content");
     main_container.appendChild(div_holder);

     //Change display-flex of main-container
     main_container.style.cssText = "justify-content: flex-start; border: none; align-items: center; gap: 300px; width:100%";
     div_holder.style.cssText = "justify-content: space-around; width: 100%; display: flex";
}

function AddChoices() {

    //Make div for buttons
    const div_for_buttons = document.createElement("div");

    //Make individual buttons with classes
    const rock_button = document.createElement("button");
    const paper_button = document.createElement("button");
    const scissors_button = document.createElement("button");

    //Style the buttons
        //Rock
        rock_button.textContent = "ROCK";
        rock_button.classList.add("game-button");
        rock_button.style.cssText = "width: 200px; height: 50px"
        //Paper
        paper_button.textContent = "PAPER";
        paper_button.classList.add("game-button");
        paper_button.style.cssText = "width: 200px; height: 50px"
        //Scissors
        scissors_button.textContent = "SCISSORS";
        scissors_button.classList.add("game-button");
        scissors_button.style.cssText = "width: 200px; height: 50px"

    //Add them to the div
    div_for_buttons.append(rock_button, paper_button, scissors_button);
    const main_container = document.querySelector(".main-content");
    main_container.appendChild(div_for_buttons);
    div_for_buttons.style.cssText = "align-self: center; display:flex; gap: 60px";
}

function GameUi() {
    AddScoreNodes();
    AddChoices();
    const buttons_for_game = document.querySelectorAll(".game-button");
    buttons_for_game.forEach(button => {
        button.addEventListener("click", playRound);
    })
    buttons_for_game.forEach(button => {
        button.addEventListener("click", (e) => console.log(e.target));
    })
 }

//Play Button
const button = document.querySelector("button");
button.addEventListener("click", addAudio);
button.addEventListener("click", Transition);

//Need to add event listener for when buttons are picked



