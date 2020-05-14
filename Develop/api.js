const axios = require('axios')

// make variable for api
const api = {
  userName(user) {
    // make request for GitHub user name
    return axios.get(`https://api.github.com/users/${user}`)
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
}

// export api.js to index.js
module.exports = api