const db = require('../config/connection');
const { User, Project } = require('../models');

const projectData = require('./projectData.json');
const userData = require('./userData.json');

db.once("open", async () => {
  await User.deleteMany({});
  const users = await User.insertMany(userData);
  console.log("Users seeded");
  await Project.deleteMany({});
  
  for (let i = 0; i < projectData.length; i++) {
    const currentProject = projectData[i];
    currentProject.author = users[Math.floor(Math.random() * users.length)]._id;
    const project = await Project.create(currentProject);
    console.log(project);
  }
  process.exit(0);
});