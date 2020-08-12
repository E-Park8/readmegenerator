// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  #${answers.title}
  ![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

  ##Description
    ${answers.description} 

  ##Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
  ##Installation
  ${answers.install}

  ##Usage
  ${answers.usage}

  ##Contributing
  ${answers.contribution}

  ##Tests

  ##Questions
  If you have any questions you can find me on Github: [${answers.username}](https://github.com/${answers.username})
  or Email me at: ${answers.email}
`;

  
}

module.exports = generateMarkdown;
