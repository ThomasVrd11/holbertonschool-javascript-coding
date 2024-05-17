#!/usr/bin/node
// #!/opt/homebrew/bin/node
const request = require('request');
const path = process.argv[2];
// fonctionne pas en local : code: 403 [DEP0040]
request(path, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('code:', response.statusCode);
  }
});
