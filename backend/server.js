// Importeer de benodigde modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/project');
const Skill = require('./models/skill');

// Maak een nieuwe express app aan
const app = express();

// Zet CORS aan (om andere apps toegang te geven)
app.use(cors());

// Zorg dat we JSON data kunnen verwerken
app.use(express.json());

// Verbind met de MongoDB database
mongoose.connect("mongodb://mongo:27017/db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Controleer of de verbinding met de database werkt
const db = mongoose.connection;
db.once("open", () => console.log("MongoDB verbonden!"));

// Test endpoint voor de backend
app.get("/api", (req, res) => {
  console.log('testing')
  res.json({message: "Hallo vanaf de backend!"});
})

// Haal alle skills op uit de database
app.get("/skill", async (req, res) => {
  try {
    const skills = await Skill.find();  // Zoek alle skills
    res.json(skills);  // Stuur de skills terug als JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching skills", error });  // Als er iets misgaat, stuur een foutmelding
  }
});

// Haal alle projecten op uit de database
app.get("/project", async (req, res) => {
  try {
    const projects = await Project.find();  // Zoek alle projecten
    res.json(projects);  // Stuur de projecten terug als JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });  // Als er iets misgaat, stuur een foutmelding
  }
});

// Zet de server aan en luister op poort 5000
app.listen(5000, () => console.log("Server draait op poort 5000"));
