const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  technologies: [String],
  category: String
});

module.exports = mongoose.model("Project", ProjectSchema);
