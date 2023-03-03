const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  skills: [{
    type: String,
    enum: ['JavaScript', 'Python', 'Java', 'Ruby', 'HTML/CSS', 'React', 'Angular', 'Vue', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Rails', 'GraphQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'React Native', 'PHP', 'Laravel', 'Swift', 'EOD']
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;