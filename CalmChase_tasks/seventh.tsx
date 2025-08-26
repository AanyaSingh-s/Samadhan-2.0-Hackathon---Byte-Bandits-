import React, { useState } from "react";

export default function StateManagementTask() {
  // Counter state
  const [count, setCount] = useState(0);

  // Input text state
  const [text, setText] = useState("");

  return (
    <div style={styles.container}>
      <h2>State Management Task</h2>

      {/* Counter Section */}
      <div style={styles.section}>
        <h3>Counter</h3>
        <p style={styles.count}>{count}</p>
        <div>
          <button style={styles.btn} onClick={() => setCount(count + 1)}>+</button>
          <button style={styles.btn} onClick={() => setCount(count - 1)}>-</button>
          <button style={styles.resetBtn} onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      {/* Live Text Preview Section */}
      <div style={styles.section}>
        <h3>Live Text Preview</h3>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
        />
        <p style={styles.preview}>Preview: {text}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    background: "#1f1f2e",
    color: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,.3)",
    textAlign: "center",
  },
  section: {
    marginBottom: "20px",
  },
  count: {
    fontSize: "2rem",
    margin: "10px 0",
  },
  btn: {
    margin: "5px",
    padding: "10px 15px",
    background: "#4f39ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  resetBtn: {
    margin: "5px",
    padding: "10px 15px",
    background: "#ff3b3b",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  input: {
    width: "80%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    marginTop: "10px",
  },
  preview: {
    marginTop: "15px",
    fontStyle: "italic",
    color: "#cfcfcf",
  },
};

