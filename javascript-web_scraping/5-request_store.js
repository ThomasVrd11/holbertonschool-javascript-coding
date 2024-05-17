#!/usr/bin/node
// #!/opt/homebrew/bin/node
const request = require('request');
const fs = require('fs');
const args = process.argv;
// still deprecated but works
request(args[2], (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(args[3], body, 'utf8', (error) => {
      if (error) {
        console.error(error);
      }
    });
  }
});
