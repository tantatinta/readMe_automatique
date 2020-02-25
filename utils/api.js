//this is where I'm making ajax call to git api

//"curl -i https://api.github.com/users/" + username

const axios = require('axios');

const api = {
  getUser(username) {
    return axios.get("https://api.github.com/users/" + username)
  }
};

module.exports = api;
