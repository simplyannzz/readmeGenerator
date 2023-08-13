// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    // inquirer
    //     .prompt([
    {
        type: 'input',
        message: 'What is your title of your project',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'What is your project about',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What is your installation?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What is your usage?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'What is your license?',
        name: 'License',
        choices: ['None', 'MIT', 'IBM', 'Apachenod'],
    },
    {
        type: 'input',
        message: 'What is your contribution',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'What is your test?',
        name: 'Test',
    },
    {
        type: 'input',
        message: 'What is your github url?',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
    },
];
// ];

// Create a function to write README file
function writeToFile(data) {
    const filename = "exampleREADME.md";

    fs.writeFile('exampleREADME.md', data, function (err) {
        err ? console.log(err) : console.log(filename + "created!")
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
