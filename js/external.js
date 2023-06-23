function getComputerChoice() {
    //Place Rock Paper Scissors Inside of String Array
    const selections = ["Rock", "Paper", "Scissors"];
    
    //Obtain Randomize that can get an index between 0 and 2
   
    /*console.log(Math.floor((Math.random() * 100) % 3));*/

    //Based on randomized selections return the string associated
    return selections[Math.floor((Math.random() * 100) % 3)];
}

function playRound(event) {
    //Here are the choices
    const player_lowercase = event.target.textContent.toLowerCase();
    console.log(player_lowercase);
    const computer_lowercase = getComputerChoice().toLowerCase();

    //Remove old description
    //Add description
    AddRoundResult(player_lowercase, computer_lowercase);
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
    if (GameOver(event)) {
        RemoveListeners();
        return;
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

function AddRoundResult(playerChoice, computerChoice) {
    const main_container = document.querySelector(".main-content");
    let result_announcement = document.createElement("p");
    result_announcement.classList.add("results");
    switch (playerChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                let win_result = document.createTextNode("Nice! Rock beats Scissors");
                result_announcement.append(win_result);
            } else if (computerChoice == "paper") {
                let win_result = document.createTextNode("Sorry Paper beats Rock");
                result_announcement.append(win_result);
            }
            else {
                let win_result = document.createTextNode("You both picked Rock try again!");
                result_announcement.append(win_result);
            }
        break;
        case "paper":
            if (computerChoice== "rock") {
                let win_result = document.createTextNode("Nice! Paper beats Rock");
                result_announcement.append(win_result);
            } else if (computerChoice == "scissors") {
                let win_result = document.createTextNode("Sorry Scissors beats Paper");
                result_announcement.append(win_result);
            }
            else {
                let win_result = document.createTextNode("You both picked Paper try again!");
                result_announcement.append(win_result);
            }
        break;
        case "scissors":
            if (computerChoice == "paper") {
                let win_result = document.createTextNode("Nice! Scissors beats paper");
                result_announcement.append(win_result);
            } else if (computerChoice == "rock") {
                let win_result = document.createTextNode("Sorry Rock beats Scissors");
                result_announcement.append(win_result);
            }
            else {
                let win_result = document.createTextNode("You both picked Scissors try again!");
                result_announcement.append(win_result);
            }
        break;
    }
    main_container.appendChild(result_announcement);
    setTimeout(RemoveResults, 1000);
}


function GameOver(event) {
    const player_score = parseInt(document.querySelector(".player_score").textContent);
    const opponent_score = parseInt(document.querySelector(".opp_score").textContent);
    const main_container = document.querySelector(".main-content");
    let result_announcement = document.createElement("p");
    result_announcement.classList.add("results");
    if (player_score == 5) {
        let win_result = document.createTextNode("Congrats you won! Do you want to play again?");
        result_announcement.append(win_result);
        main_container.appendChild(result_announcement);
        AddPlayAgainButton();
        return true;
    } else if (opponent_score == 5) {
        let loss_result = document.createTextNode("Unfortunately you lost! Do you want to play again?");
        result_announcement.append(loss_result);
        main_container.appendChild(result_announcement);
        AddPlayAgainButton();
        return true;
    }
    return false;
}



//addAudio after play button
function addAudio() {
    const audio = document.querySelector("audio");
    audio.currentTime = 0;
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
    let body = document.querySelector("body");
    body.style.background = "none";
    body.style.backgroundColor = "#5151FF"
}

//Transition to show GameUI
function Transition() {
    //Take out the nodes once the music is finished
    setTimeout(removeAllChildNodes, 9000);
    setTimeout(GameUi, 9000);
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
     main_container.style.cssText = "justify-content: flex-start; border: none; align-items: center; gap: 125px; width:100%";
     div_holder.style.cssText = "justify-content: space-around; width: 100%; display: flex";
}

function AddChoices() {

    //Make div to hold all gifs
    const div_for_buttons = document.createElement("div");

    //create a div for each gif
    const rock_div = document.createElement("div");
    rock_div.classList.add("gif");
    rock_div.textContent = "ROCK";
    const paper_div = document.createElement("div");
    paper_div.classList.add("gif");
    paper_div.textContent = "PAPER";
    const scissors_div = document.createElement("div");
    scissors_div.classList.add("gif");
    scissors_div.textContent = "SCISSORS";

    //Add CSS to divs
    rock_div.style.cssText = "width: 450px; font-size: 0; background-image: url(https://media.tenor.com/-oyIGCZSx1YAAAAC/gif.gif); background-repeat: no-repeat; background-size: cover";
    paper_div.style.cssText = "width: 450px; font-size: 0; background-image: url(https://media.tenor.com/RijtJsuJ8wAAAAAC/mariah-carey-bye.gif); background-repeat: no-repeat; background-size: cover";
    scissors_div.style.cssText = "width: 450px; font-size: 0; background-image: url(https://media.tenor.com/BW7UMEBNTVUAAAAC/snoop-dogg-peace-sign.gif); background-repeat: no-repeat; background-size: cover";


    //Add them to the main div div
    div_for_buttons.append(rock_div, paper_div, scissors_div);
    const main_container = document.querySelector(".main-content");
    main_container.appendChild(div_for_buttons);
    div_for_buttons.style.cssText = "align-self: center; justify-content: space-around; width: 100%; height: 400px; display:flex; gap: 60px";
}

function AddEventListeners() {
    const gif_div = document.querySelectorAll(".gif");
    gif_div.forEach(div => {
        div.addEventListener("click", playRound);
    })
}

function GameUi() {
    AddScoreNodes();
    AddChoices();
    AddEventListeners();
 }

 function RemoveListeners() {
    const buttons_for_game = document.querySelectorAll(".game-button");
    buttons_for_game.forEach(button => {
        button.removeEventListener("click", playRound);
    })
 }

 function AddPlayAgainButton() {
    const main_container = document.querySelector(".main-content");
    const play_again_button = document.createElement("button");
    play_again_button.classList.add("game-button");
    play_again_button.classList.add("play_again");
    play_again_button.style.cssText = "width: 200px; height: 50px"
    play_again_button.textContent = "Play Again";
    main_container.appendChild(play_again_button);
    play_again_button.addEventListener("click", Reset, {once: true});
 }

 function RemoveResults() {
    let text_results = document.querySelector(".results");
    while (text_results.firstChild) {
        text_results.removeChild(text_results.firstChild);
    }
    text_results.remove();
 }

 function Reset() {
    //Set scores back to 0, remove text nodes, and make buttons clickable again

    //First set scores back to 0
    const player_score = document.querySelector(".player_score");
    player_score.textContent = "0";
    const opponent_score = document.querySelector(".opp_score");
    opponent_score.textContent = "0";

    //Remove text nodes
    RemoveResults();

    //Remove play button
    const main_container = document.querySelector(".main-content");
    main_container.removeChild(main_container.lastChild);
   

    //Make buttons clickable again
    AddEventListeners();
    //Add Audio
    addAudio;
 }


//Play Button
const play_button = document.querySelector("#play-button");
play_button.addEventListener("click", addAudio, {once: true});
play_button.addEventListener("click", Transition, {once: true});


//Need to add event listener for when buttons are picked



