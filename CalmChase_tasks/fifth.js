const express = require('express');
const app = express();
const port = 3000;

const students = [
  { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
  { id: 2, name: 'Bob', age: 22, major: 'Biology' },
  { id: 3, name: 'Charlie', age: 21, major: 'History' },
  { id: 4, name: 'Diana', age: 23, major: 'Mathematics' },
];

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.listen(port, () => {
  console.log(`Student API listening at http://localhost:${port}`);
});