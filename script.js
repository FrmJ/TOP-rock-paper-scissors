const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
};

const checkWinner = () => {
    let winner = "";
    if (humanScore === 5) {
        winner = "player";
    }
    if (computerScore === 5) {
        winner = "computer";
    }

    if (computerScore === 5 || humanScore === 5) {
        alert(`${winner} wins the game!`);
        resetScore();
    }
};

const resetScore = () => {
    humanScore = 0;
    computerScore = 0;
    displayUpdateScore("player", 0);
    displayUpdateScore("computer", 0);

    const roundWinner = document.querySelector("p.round-winner");
    roundWinner.innerText = "";
};

const updateScore = (winner) => {
    if (winner === "player") {
        humanScore++;
        displayUpdateScore(winner, humanScore);
    } else {
        computerScore++;
        displayUpdateScore(winner, computerScore);
    }

    displayRoundWinner(winner);
};

const displayUpdateScore = (winner, points) => {
    const score = document.querySelector(`p.${winner} > span`);
    score.innerText = points;
};

const displayRoundWinner = (winner) => {
    if (document.querySelector("p.round-winner")) {
        const roundWinner = document.querySelector("p.round-winner");
        roundWinner.innerText = `${winner} wins the round!`;
    } else {
        const body = document.querySelector("body");
        const roundWinner = document.createElement("p");
        roundWinner.className = "round-winner";
        roundWinner.innerText = `${winner} wins the round!`;
        body.appendChild(roundWinner);
    }
};

const playRound = (humanChoice) => {
    const computerChoice = getComputerChoice();
    console.log(`Player chose: ${choices[parseInt(humanChoice)]}`);
    console.log(`Computer chose: ${choices[computerChoice]}`);


    if (humanChoice === computerChoice) {
        console.log("It's a draw");
        return;
    }

    const result = (humanChoice - computerChoice + 3) % 3;

    if (result === 1) {
        updateScore("player");
        console.log(`Player wins! ${choices[humanChoice]} beats ${choices[computerChoice]}!`);
    } else {
        updateScore("computer");
        console.log(`Computer wins! ${choices[computerChoice]} beats ${choices[humanChoice]}!`);
    }

    checkWinner();
};

const playGame = () => {

    const btns = document.querySelectorAll("button");
    
    btns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            playRound(e.target.dataset.choice);
        });
    })

    const scores = `Player Score: ${humanScore}\nComputer Score: ${computerScore}`;
    console.log(scores);

    if (humanScore === computerScore) {
        console.log("Game is a draw!");
        return;
    }

    if (humanScore > computerScore) {
        console.log("Player wins the game!");
    } else {
        console.log("Computer wins the game!");
    }
};

let humanScore = 0;
let computerScore = 0;

playGame();