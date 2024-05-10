#! /user/bin/env node
import inquirer from "inquirer"
console.log("Welcome to my adventure quiz game:")
console.log("You are required to gain maximum 4 points for the window")
let points = 0

//question1
let question1 = await inquirer.prompt([{
    name: "one",
    message: "typescript is a superset off?",
    type: "list",
    choices: ["python", "c++", "java", "javascript"]
}])
if (question1.one == "javascript") {
    console.log("Your answer is correct")
    points++
} else {
    console.log("Your answer is incorrect")
}
//question2
let question2 = await inquirer.prompt([{
    name: "two",
    message: "What does TypeScript provide that JavaScript lacks?",
    type: "list",
    choices: ["strong typing", "dynamic typing", "optional typing", "no typing system"]
}])
if (question2.three == "strong typing") {
    console.log("Your answer is correct")
    points++
} else {
    console.log("Your answer is incorrect")
}
//question3
let question3 = await inquirer.prompt([{
    name: "three",
    message: "Which file extension is commonly used for typescript files",
    type: "list",
    choices: [".ts", ".html", ".js", ".txt"]
}])
if (question3.three == ".ts") {
    console.log("Your answer is correct")
    points++
} else {
    console.log("Your answer is incorrect")
}
//question4
let question4 = await inquirer.prompt([{
    name: "four",
    message: "What does transpilation mean in the context of TypeScript?",
    type: "list",
    choices: ["Converting TypeScript code to machine code",
"Converting TypeScript code to JavaScript code",
"Converting JavaScript code to TypeScript code",
"Analyzing TypeScript code for errors"]
}])
if (question4.four == "") {
    console.log("Your answer is correct")
    points++
} else {
    console.log("Your answer is incorrect")
}
//question5
let question5 = await inquirer.prompt([{
    name: "five",
    message: "In TypeScript which keyword is used to declare a variable with an explicit data typer?",
    type: "list",
    choices: ["const","let","var","type"]
}])
if (question5.five == "type") {
    console.log("Your answer is correct")
    points++
} else {
    console.log("Your answer is incorrect")
}
//output conditions
if(points>=4){
    console.log("Congratulations")
    console.log(`Your points:${points}`)
}else{
    console.log("You loss!Try again")
    console.log(`Your points:${points}`)

}