#!/usr/bin/node
const request = require('request');
const args = process.argv;
const API = 'https://swapi-api.hbtn.io/api/films/';

// Still deprecated but works
request(`${API}${args[2]}`, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(response.body);
    console.log(data.title);
  }
});
