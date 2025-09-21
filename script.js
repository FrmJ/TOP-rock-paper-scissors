const getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
};

const getHumanChoice = () => {
    const promptText = "Choose a number corresponding to the option:\nRock - 0\nPaper - 1\nScissor - 2";
    return parseInt(prompt(promptText));
};

const playRound = (humanChoice, computerChoice) => {
    const choices = ["Rock", "Paper", "Scissors"];
    console.log(`Player chose: ${choices[humanChoice]}`);
    console.log(`Computer chose: ${choices[computerChoice]}`);

    if (humanChoice === computerChoice) {
        console.log("It's a draw");
        return;
    }

    const result = (humanChoice - computerChoice + 3) % 3;

    if (result === 1) {
        humanScore++;
        console.log(`Player wins! ${choices[humanChoice]} beats ${choices[computerChoice]}!`);
        return;
    } else {
        computerScore++;
        console.log(`Computer wins! ${choices[computerChoice]} beats ${choices[humanChoice]}!`);
        return;
    }
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);