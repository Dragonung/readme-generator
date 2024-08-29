// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const generateMarkdown = ({ title, diuct, license, un, email }) => {
const licenses = {
    'MIT License': "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}

    return `## ${title}

##Table of Contents

[DIUCT](#diuct)
[License](#License)
[Questions](#Questions)

## Description, Installation instructions, Usage information, Contribution guidelines, and Test instructions

<a name = "diuct"/>${diuct}

## License 

${licenses[license]}

## Questions

${un}

${email}`
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readme = data;
    fs.writeFile('README.md', readme, (err) => {
        err ? console.error(err) : console.log('A new README has been created.')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'README title?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Description, Installation instructions, Usage information, Contribution guidelines, and Test instructions',
                name: 'diuct',
            },
            {
                type: 'list',
                message: 'Select a license.',
                name: 'license',
                choices: ['Apache License 2.0',
                    'GNU General Public License v3.0',
                    'MIT License',
                    'BSD 2-Clause "Simplified" License',
                    'BSD 3-Clause "New" or "Revised" License',
                    'Boost Software License 1.0',
                    'Creative Commons Zero v1.0',
                    'Eclipse Public License 2.0',
                    'GNU Affero General Public License v3.0',
                    'GNU Lesser General Public License v2.1',
                    'Mozilla Public License 2.0',
                    'The Unlicense'],
            },
            {
                type: 'input',
                message: 'Enter Github username.',
                name: 'un',
            },
            {
                type: 'input',
                message: 'Enter email.',
                name: 'email',
            },
        ])
        .then((response) => {
            writeToFile('README.md', generateMarkdown(response));
        });
}

// Function call to initialize app
init();
