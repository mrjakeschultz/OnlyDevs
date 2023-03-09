const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skillsNeeded: [{
    type: String,
    enum: ['JavaScript', 'Python', 'Java', 'Ruby', 'HTML/CSS', 'React', 'Angular', 'Vue', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Rails', 'GraphQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'React Native', 'PHP', 'Laravel', 'EOD', 'Swift', 'C', 'C++']
  }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;