// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
            return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
            return true;
            }else {
                console.log('Please provide a description for your project!');
                return false;
            }
        }
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions to install your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
            return true;
            }else{
                console.log('Please provide instructions for your project installation');
                return false;
            }
        }
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
            return true;
            }else{
                console.log('Please explain how to use your project.')
                return false;
            }
        }
    },
    // Contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'Are other developers allowed to contribute to your project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
            return true;
            }else{
                console.log('Please explain how other developers may contribute to your project.')
                return false;
            }
        }
    },
    // Test
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project? (Required)',
        validate: testInput => {
            if (testInput) {
            return true;
            }else{
                console.log('Please explain how do you test your project')
                return false;
            }
        }
    },
    // License
    {
        type: 'input',
        name: 'license',
        message: 'Please choose a license for your project. (Required)',
        choices: ['MIT', 'Mozilla', 'Apache'],
        validate: licenseInput => {
            if(licenseInput) {
            return true;
            }else{
                console.log('Please choose a license for your project')
                return false;
            }
        }
    },
    // Github username
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate: githubInput => {
            if(githubInput) {
            return true;
            }else{
                console.log('Please enter your github username')
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if(emailInput) {
            return true;
            }else{
                console.log('Please enter your email address.')
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README File created!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
