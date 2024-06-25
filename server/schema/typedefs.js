const { gql } = require('apollo-server');

const typeDefs = gql`
type Team {
    id: ID!
    name: String!
    votes: Int
}

type Matchup {
    id: ID!
    team1: Team!
    team2: Team!
    winner: Team
    status: String!
}

type User {
    id: ID!
    username: String!
    email: String!
    matchups: [Matchup]
}

type Query {
    matchups: [Matchup]
    matchup(id: ID!): Matchup
}

type Mutation {
    createUser(username: String!, email: String!): User
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User
}
`;

module.exports = typeDefs;