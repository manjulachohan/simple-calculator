#!/usr/bin/env node
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { massage: "Enter first number", type: "number", name: "firstNumber" },
  { massage: "Enter second number", type: "number", name: "secondNumber" },
  {
    massage: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);


//corditional statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);  
} else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);  
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
    
} else {
    console.log("Please select valid operator");
    
}