#!/usr/bin/node
// #!/opt/homebrew/bin/node pour tester en local
const fs = require('fs');
const args = process.argv;

try {
  fs.writeFileSync(args[2], args[3], 'utf-8');
} catch (err) {
  console.log(err);
}
