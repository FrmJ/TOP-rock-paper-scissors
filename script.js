const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
};

// const getHumanChoice = () => {
//     const promptText = "Choose a number corresponding to the option:\nRock - 0\nPaper - 1\nScissor - 2";
//     return parseInt(prompt(promptText));
// };

const updateScore = (winner) => {
    if (winner === "player") {
        humanScore++;
        displayUpdateScore(winner, humanScore);
    } else {
        computerScore++;
        displayUpdateScore(winner, computerScore);
    }
}

const displayUpdateScore = (winner, points) => {
    const score = document.querySelector(`p.${winner} > span`);
    console.log(score + "asd");
    score.innerText = points;
    displayRoundWinner(winner);
}

const displayRoundWinner = (winner) => {
    if (document.querySelector("p.round-winner")) {
        const roundWinner = document.querySelector("p.round-winner");
        roundWinner.innerText = `${winner} wins!`;
    } else {
        const body = document.querySelector("body");
        const roundWinner = document.createElement("p");
        roundWinner.className = "round-winner";
        roundWinner.innerText = `${winner} wins!`;
        body.appendChild(roundWinner);
    }
}

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
        // humanScore++;
        updateScore("player");
        console.log(`Player wins! ${choices[humanChoice]} beats ${choices[computerChoice]}!`);
    } else {
        // computerScore++;
        updateScore("computer");
        console.log(`Computer wins! ${choices[computerChoice]} beats ${choices[humanChoice]}!`);
    }
};

const playGame = () => {
    // for ( let i = 0; i < 5; i++) {
    //     const humanChoice = getHumanChoice();
    //     const computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice);
    // }

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