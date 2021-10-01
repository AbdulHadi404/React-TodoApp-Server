const { gql } = require("apollo-server");

const typeDefs = gql`
	type Todo {
		id: ID!
		title: String!
		content: String!
	}
	type Query {
		todos: [Todo]
		todo(id: ID!): Todo
	}
	input TodoInput {
		title: String!
		content: String!
	}
	type Mutation {
		createTodo(todoInput: TodoInput): Todo
		updateTodo(id: ID!, todoInput: TodoInput): Todo!
		deleteTodo(id: ID!): Todo
	}
`;
module.exports = typeDefs;