# Student CRUD API
This project is a simple Express.js API that lets you manage student records. It's a great example of a basic CRUD (Create, Read, Update, Delete) application, built to be straightforward and easy to use.

# You can use these endpoints to interact with the student data.
# Get all students
GET /students

# Get a student by ID
GET /students/:id

# Add a new student
POST /students
Body Example:
{
  "name": "Riya",
  "age": 22
}


# Update a student
PUT /students/:id
Body Example:
{
  "age": 23
}


# Delete a student
DELETE /students/:id

# Testing the API
You can test these endpoints using a tool like Postman, the Thunder Client VS Code extension, or even with curl directly from your terminal.
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Aanya","age":20}'

# project structure
student-crud-api/
├── server.js
├── package.json 
└── README.md  