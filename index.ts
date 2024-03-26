#! /usr/bin/env node

import inquirer from "inquirer";

// 1.Computer will geneate a random numbers

// 2.User input for guessing numbers

// 3.Campare using input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6+1);

const answers = await  inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6:",

},
]);
if(answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.")
}else{
    console.log("You guessed wroung number");
}