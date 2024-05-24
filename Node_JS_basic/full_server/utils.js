const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, dataDb) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const inFields = {};
        const data = dataDb.split('\n').filter((line) => line.trim() !== ''); // Add parentheses here
        const numberOfStudents = data.length - 1;
        console.log(`Number of students: ${numberOfStudents}`);

        for (let i = 1; i < data.length; i += 1) {
          const line = data[i].split(',');
          const field = line[3] ? line[3].trim() : '';
          const name = line[0] ? line[0].trim() : '';
          if (field && name) {
            if (inFields[field]) {
              inFields[field].counter += 1;
              inFields[field].students.push(name);
            } else {
              inFields[field] = { counter: 1, students: [name] };
            }
          }
        }
        for (const key in inFields) {
          if (Object.prototype.hasOwnProperty.call(inFields, key)) {
            console.log(`Number of students in ${key}: ${inFields[key].counter}. List: ${inFields[key].students.join(', ')}`);
          }
        }
        resolve({ inFields, counter: numberOfStudents });
      }
    });
  });
}

module.exports = readDatabase;
