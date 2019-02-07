const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Result {
    id: String
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    vueets: [Vueet!]
    likedVueets: [Vueet!]
    following: [User!]
    followers: [User!]
    createdAt: String!
    updatedAt: String!
  }

  type AuthData {
    token: String!
    user: User!
  }

  type Vueet {
    _id: ID!
    content: String!
    author: User!
    likes: Int!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  input VueetInput {
    content: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input FollowInput {
    userId: ID!
  }
  
  type Query {
    hello: String
    users: [User!]!
    vueets: [Vueet!]!
    login(input: LoginInput!): AuthData!
  }

  type Mutation {
    createUser(input: UserInput): User!
    createVueet(input: VueetInput): Vueet!
    follow(input: FollowInput): User!
  }

  type Subscription {
    somethingChanged: Result
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`)
