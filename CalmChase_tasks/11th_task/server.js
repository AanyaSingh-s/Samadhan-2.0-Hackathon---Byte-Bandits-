import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
  { id: 1, name: "Aanya", age: 20 },
  { id: 2, name: "Rahul", age: 22 }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
    name: req.body.name,
    age: req.body.age,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  const { name, age } = req.body;
  student.name = name || student.name;
  student.age = age || student.age;
  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  const initialLength = students.length;
  students = students.filter(s => s.id !== parseInt(req.params.id));
  if (students.length === initialLength) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));