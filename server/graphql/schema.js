const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type AuthData {
    token: String!
    user: User!
  }

  input UserInputData {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
  
  type Query {
    users: [User]!
    login(input: LoginInput!): AuthData!
  }

  type Mutation {
    createUser(input: UserInputData): User!
  }
`)
