// make a function for the markdown page on the readme.md
function markdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
    * Installation
    * Usage
    * License
    * Contributing
    * Test
    * Questions
    
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ![User Img](${data.avatar_url})
  Name: ${data.name}
  Email: ${data.email}
  `
}

// export markdown.js to index.js
module.exports = markdown