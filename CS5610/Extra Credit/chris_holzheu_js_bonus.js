const student_name = "CHRIS_HOLZHEU"

function dndDiceRoller(diceNum, diceSides) {
    let result = 0;

    for (var i = 0; i < diceNum; i++) {
        max = Math.ceil(diceSides);
        var dice = Math.floor(Math.random() * (max - 1) + 1);
        console.log(dice);
        result += dice;
    }

    return result;
}

const diceNum = 3, diceSides = 6
console.log("Starting tests for " + student_name);
console.log(dndDiceRoller(diceNum, diceSides));
console.log(dndDiceRoller(diceNum, diceSides));
console.log(dndDiceRoller(diceNum, diceSides));