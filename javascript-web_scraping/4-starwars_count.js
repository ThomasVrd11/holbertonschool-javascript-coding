#!/usr/bin/node
// #!/opt/homebrew/bin/node
const request = require('request');
const args = process.argv;
// still deprecated but works
request(args[2], (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    let len = 0;
    films.forEach(film => {
      film.characters.forEach(character => {
        if (character.includes(18)) {
          len++;
        }
      });
    });
    console.log(len);
  }
});
