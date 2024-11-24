#!/usr/bin/env node
// Reading file asynchronously with Node JS
const fs = require('fs').promises;
const path = require('path');

module.exports = async function countStudents(filepath) {
  try {
    const data = await fs.readFile(path.resolve(filepath), 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    const result = [`Number of students: ${numberOfStudents}`];

    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    students.forEach((student) => {
      const firstName = student[0];
      const field = student[3];
      if (field in fields) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }
    });

    for (const [field, firstNames] of Object.entries(fields)) {
      const logMessage = `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`;
      console.log(logMessage);
      result.push(logMessage);
    }

    return result;
  } catch (err) {
    console.error('Error:', err.message);
    throw new Error('Cannot load the database');
  }
};
