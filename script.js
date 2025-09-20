const getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
};

const getHumanChoice = () => {
    const promptText = "Choose a number corresponding to the option:\nRock - 0\nPaper - 1\nScissor - 2";
    return parseInt(prompt(promptText));
};