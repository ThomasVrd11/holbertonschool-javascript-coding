import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const dbFilePath = process.argv[2];
    try {
      const database = await readDatabase(dbFilePath);
      let responseData = 'This is the list of our students\n';
      for (const [key, value] of Object.entries(database.inFields)) {
        responseData += `Number of students in ${key}: ${value.counter}. List: ${value.students.join(', ')}\n`;
      }
      res.status(200).send(responseData.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFilePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = await readDatabase(dbFilePath);
      if (database.inFields[major]) {
        res.status(200).send(`List: ${database.inFields[major].students.join(', ')}`);
      } else {
        res.status(200).send('List:');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
    return undefined;
  }
}

export default StudentsController;
