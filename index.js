const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')


// array of questions for user
const questions = [
    inquirer
      .prompt([
          {
          type: 'input',
          name: 'title',
          message: 'What is your title?'

          },
        {
          type: 'input',
          name: 'description',
          message: 'Give a description for your application:'  
        },
    {
        type: 'input',
        name: 'install',
        message: 'How to install your application:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List contribution guidelines:'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license?',
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
])
    .then(answers => {
        console.log(answers)
        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, function (err){
                if (err) {console.log(err)}
                console.log('File Generated')
            } )
         
        } 
        writeToFile('exREADME.md', generateMarkdown(answers))
    })
    .catch(err => {
        console.log(err)
    })
];