const axios = require('axios')

const api = {
  userName(user) {
    return axios.get(`https://api.github.com/users/${user}`)
      .catch(function (error) {
        console.log(error);
      })
  }
}

// export api.js to index.js
module.exports = api