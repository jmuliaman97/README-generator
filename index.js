const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
// path provides utilities for working with file and directory paths
const path = require('path')
// import markdown from markdown.js
const markdown = require('./Develop/markdown.js')
// import api from api.js
const api = require('./Develop/api.js')

const questions = [
  'Username:',
  'Title:',
  'Description:',
  'Installation:',
  'Usage:',
  'License:',
  'Contributing:',
  'Tests:'
]

// make a function for writeToFile 
function writeToFile(fileName, data) {
  // write data to the file, join current working directory and file name and join path to form a single path
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
  prompt([
    {
      type: 'input',
      name: 'user',
      message: questions[0]
    },
    {
      type: 'input',
      name: 'title',
      message: questions[1]
    },
    {
      type: 'input',
      name: 'description',
      message: questions[2]
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[4]
    },
    {
      type: 'input',
      name: 'license',
      message: questions[5]
    },
    {
      type: 'input',
      name: 'contributing',
      message: questions[6]
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[7]
    }
  ])
    .then(response => {

      api
        // run userName in API using axios for the response is the username
        .userName(response.user)
        .then(({ data }) => {
          // use writeToFile function to overwrite the README.md page with the markdown which includes all data and response
          writeToFile('README.md', markdown({ ...data, ...response }))
        })
        .catch(err => console.log(err))
    })

}

init()

