const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
// path provides utilities for working with file and directory paths
const path = require('path')
// import markdown from markdown.js
const markdown = require('./Develop/markdown.js')
// import api from api.js
const api = require('./Develop/api.js')

// make an array of section
const section = ['user', 'title', 'description', 'installation', 'usage', 'license', 'contributing', 'tests']

// make a second array for questions
let questions = []
for (let i = 0; i < section.length; i++) {
  questions.push({
    type: 'input',
    name: section[i],
    message: `${section[i]}: `
  })
}

// make a function for writeToFile 
function writeToFile(fileName, data) {
  // write data to the file, join current working directory and file name and join path to form a single path
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
  prompt(questions)
    .then(response => {
      api
        // run userName in API using axios for the response is the username
        .userName(response.user)
        .then(({ data }) => {
          // use writeToFile function to overwrite the README.md page with the markdown which includes all data and response
          // log data and response using rest operator to give the rest of value of data and response
          writeToFile('README.md', markdown({ ...data, ...response }))
        })
        .catch(err => console.log(err))
    })
}
init()

