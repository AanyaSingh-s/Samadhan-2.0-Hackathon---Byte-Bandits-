const studentName = 'Alice Smith';
let studentID = 54321;
let isEnrolled = true;
const subjects = ['Physics', 'Chemistry', 'Biology'];
let gradeLevel = 'Grade ' + 11;
console.log('Type of studentName:', typeof studentName); 
if (isEnrolled && studentID > 50000) {
    console.log('--- Student Report ---');
    console.log('Name: ' + studentName);
    console.log('ID: ' + studentID);
    console.log('Status: Enrolled');
    console.log('Grade: ' + gradeLevel);
    console.log('Subjects: ' + subjects.join(', '));
} else {
    console.log('Student not found or not enrolled.');
}