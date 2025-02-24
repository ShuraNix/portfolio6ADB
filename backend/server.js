const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/project');
const Skill = require('./models/skill');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB verbonden!"));

app.get("/api", (req, res) => {
console.log('testing')
res.json({message: "Hallo vanaf de backend!"});
})

app.get("/skill", async (req, res) => {
  try {
    const skills = await Skill.find(); 
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching skills", error });
  }
});

app.get("/project", async (req, res) => {
  try {
    const projects = await Project.find(); 
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
});

app.listen(5000, () => console.log("Server draait op poort 5000"));