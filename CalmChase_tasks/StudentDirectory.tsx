import { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  course: string;
};

export default function StudentDirectory() {
  const [students, setStudents] = useState<Student[]>([]);

  // Fetch students from backend
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div>
      <h2>Student Directory</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}
