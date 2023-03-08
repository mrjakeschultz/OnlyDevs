const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		password: String!
		email: String!
		skills: String!
	}

type Query {
        user: [User]
        project: [Project]
        me: User
    }

type Project {
		id: ID!
		name: String!
		description: String!
		author: String!
		skillsNeeded: String!
	}

type GetProjects {
		projects {
			id
			name
			description
			author {
				id
				name
			}
			skillsNeeded
		}
	}
  
  type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addProject(
            name: String!,
            description: String!,
            author: String!,
            skillsNeeded: String!
        ): Project
        removeProject(projectId: ID!): Project
      }
`;

module.exports = typeDefs;
