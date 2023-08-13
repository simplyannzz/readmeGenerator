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
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project about',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is your usage?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: ['None', 'MIT', 'IBM', 'Apache'],
    },
    {
        type: 'input',
        message: 'What is your contribution',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is your test?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your github url?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];
// ];

// Create a function to write README file
function writeToFile(data) {
    const filename = "testREADME.md";

    fs.writeFile('testREADME.md', data, function (err) {
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
