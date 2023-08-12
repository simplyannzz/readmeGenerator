// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
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
                choices: ['MIT', 'IBM', 'Apachenod'],
                name: 'License',
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
        ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('log.txt', data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
