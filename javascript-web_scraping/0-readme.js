#!/usr/bin/node
// #!/opt/homebrew/bin/node pour tester en local
const fs = require('fs');
const args = process.argv;

fs.readFile(args[2], 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
