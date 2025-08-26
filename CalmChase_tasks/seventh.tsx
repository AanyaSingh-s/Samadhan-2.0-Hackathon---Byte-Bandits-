import React, { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add new task
  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  // Toggle complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>To-Do List</h2>
      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.listItem}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#888" : "#fff",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={styles.deleteBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "40px auto",
    padding: "20px",
    background: "#1f1f2e",
    color: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,.3)",
  },
  inputRow: {
    display: "flex",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
  },
  addBtn: {
    marginLeft: "8px",
    padding: "10px 15px",
    background: "#4f39ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    background: "#2d2d40",
    padding: "8px 12px",
    borderRadius: "6px",
  },
  taskText: {
    cursor: "pointer",
  },
  deleteBtn: {
    border: "none",
    background: "transparent",
    color: "#ff6ec7",
    cursor: "pointer",
    fontSize: "16px",
  },
};
