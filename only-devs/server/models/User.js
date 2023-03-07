const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  skills: [{
    type: String,
    enum: ['JavaScript', 'Python', 'Java', 'Ruby', 'HTML', 'HTML/CSS','CSS', 'MySQL', 'React', 'Angular', 'Vue', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Rails', 'GraphQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'React Native', 'PHP', 'Laravel', 'Swift', 'EOD', 'C', 'C++']
  }]
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;