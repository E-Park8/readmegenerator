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
          message: 'What is your title'

          }])

];

// // function to write README file
// function writeToFile(fileName, data) {
// }



//function to write the file to readme
// fs.writeFile('exREADME.md', 'Hi', (err) => {
// 	if (err) {console.log(err)}
// 	console.log('File Create!')})

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
