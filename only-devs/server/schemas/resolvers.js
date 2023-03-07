const { User, Project } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        project: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Project.find(params)
        }
    }
};

module.exports = resolvers