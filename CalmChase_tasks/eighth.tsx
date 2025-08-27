import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
