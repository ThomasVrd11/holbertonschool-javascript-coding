const express = require('express');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const studentsList = [];
    const originalConsoleLog = console.log;
    console.log = (message) => {
      studentsList.push(message);
    };

    await countStudents(DATABASE);

    console.log = originalConsoleLog;

    const studentsString = studentsList.join('\n');
    res.send(`${msg}${studentsString}`);
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});

app.listen(port, () => {
});

module.exports = app;
