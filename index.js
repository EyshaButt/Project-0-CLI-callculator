#!usr\bin\env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets start calculation'); //start
    await sleep();
    rainbowTitle.stop();
    console.log(`       _____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|`);
    // console.log(`${rainbowTitle} is fine`)
}
await welcome();
async function askQuestion() {
    const answer = await inquirer
        .prompt([
        /* pass your question in here */
        {
            type: "list",
            name: "operator",
            massege: "Which operator you want to perform? \n",
            choices: ["Addition", "Subraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            massege: "Enter the number 1:"
        },
        {
            type: "number",
            name: "num2",
            massege: "Enter the number 2:"
        }
    ]);
    if (answer.operator == "Addition") {
        console.log(`chalk.green(${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2})`);
    }
    else if (answer.operator == "Subtraction") {
        console.log(`chalk.green(${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2})`);
    }
    else if (answer.operator == "Multiplication") {
        console.log(`chalk.green(${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2})`);
    }
    else if (answer.operator == "Division") {
        console.log(`chalk.green(${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2})`);
    }
}
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:"
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
