#!/usr/bin/node
// #!/opt/homebrew/bin/node
const request = require('request');
const args = process.argv;
// still deprecated but works
request.get(args[2], (err, response, body) => {
  if (err) {
    console.error(err);
  }
  const done = {};
  const list = JSON.parse(body);
  for (const task of list) {
    if (task.completed) {
      if (!done[task.userId]) {
        done[task.userId] = 1;
      } else {
        done[task.userId]++;
      }
    }
  }
  console.log(done);
});
