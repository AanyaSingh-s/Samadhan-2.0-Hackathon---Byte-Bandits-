import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import noteRoutes from "./routes/notes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/notesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
})
.catch(err => console.error(" DB Connection Error:", err));
