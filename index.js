// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const generateMarkdown = ({ title, diuct, license, un, email }) => {
    const licenses = {
        'Apache License 2.0': "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        'GNU General Public License v3.0': "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        'MIT License': "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        'BSD 2-Clause "Simplified" License': "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
        'BSD 3-Clause "New" or "Revised" License': "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        'Boost Software License 1.0': "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        'Creative Commons Zero v1.0': "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
        'Eclipse Public License 2.0': "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        'GNU Affero General Public License v3.0': "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
        'GNU General Public License v2.0': "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
        'GNU Lesser General Public License v2.1': "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
        'Mozilla Public License 2.0': "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        'The Unlicense': "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }

return `## ${title}

## Table of Contents

[DIUCT](#DIUCT)<br/>
[License](#License)<br/>
[Questions](#Questions)

## Description, Installation instructions, Usage information, Contribution guidelines, and Test instructions

${diuct}

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
                    'GNU General Public License v2.0',
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
