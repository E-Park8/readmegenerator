
function generateMarkdown(answers) {
  return `
# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description 
${answers.description} 


## Installation 
${answers.install}

## Usage 
${answers.usage}

## License
This application is licensed under ![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Contributing 
${answers.contribution}

## Tests
${answers.tests}

## Questions
If you have any questions you can find me on Github: [${answers.username}](https://github.com/${answers.username})
or Email me at: ${answers.email}
`;

  
}

module.exports = generateMarkdown;
