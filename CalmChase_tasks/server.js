const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// student data
let students = [
  { id: 1, name: "Aanya Singh", course: "CSE" },
  { id: 2, name: "Ravi Sharma", course: "ECE" },
  { id: 3, name: "Priya Verma", course: "Mechanical" }
];

// API endpoint
app.get("/students", (req, res) => {
  res.json(students);
});

// Run 
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
