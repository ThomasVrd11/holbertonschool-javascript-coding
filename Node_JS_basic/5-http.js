const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      const studentsList = [];
      const originalConsoleLog = console.log;
      console.log = (message) => {
        studentsList.push(message);
      };

      await countStudents(DATABASE);

      console.log = originalConsoleLog;

      res.end(studentsList.join('\n'));
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
