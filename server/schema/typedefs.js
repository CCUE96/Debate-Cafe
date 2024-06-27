const typeDefs =`
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

type Comment {
    id: ID!
    comment_text: String!
    user: User!}

type Query {
    matchups: [Matchup]
    matchup(id: ID!): Matchup
    teams:[Team]
    team(id: ID!) : Team
    users: [User]
    user(id : ID!): User
}

type Mutation {
    createUser(username: String!, email: String!): User
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User
}
`;

module.exports = typeDefs;