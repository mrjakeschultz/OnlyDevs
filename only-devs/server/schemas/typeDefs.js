const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		password: String!
		email: String!
		skills: String!
	}

	type Project {
		id: ID!
		name: String!
		description: String!
		author: String!
		skillsNeeded: String!
	}

	type Query {
		user: [User]
		project: [Project]
		me: User
	}

	query GetProjects {
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
`;

module.exports = typeDefs;
