const typeDefs = `
input UserInput {
  username: String
  email: String
  password: String
}

type Team {
    id: ID!
    name: String!
    votes: [User]
    Score: Int
}

type Debate {
    id: ID!
    team1: Team!
    team2: Team!
    winner: Team
    status: String
    comments: [Comment]
}

type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    debates: [Debate]
    comments: [Comment]
    replies: [Reply]
}

type Auth {
    token: ID!
    user: User
}

type Comment {
    id: ID!
    commentText: String!
    user: User!
    createdAt: String!
    replies: [Reply]
}

type Reply {
    id: ID!
    createdAt: String!
    username: String!
    userId: ID!
    commentId: ID!
    content: String!
}

type Query {
    debates: [Debate]
    debate(id: ID!): Debate
    teams: [Team]
    team(id: ID!): Team
    users: [User]
    user(id: ID!): User
    me: User
    comment(id: ID!): Comment
    comments: [Comment]
    reply(id: ID!): Reply
    replies: [Reply]
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    updateUser(id: ID!, userData: UserInput!): User
    deleteUser(id: ID!): User
    createComment(debateId: ID!, userId: ID!, commentText: String!): Comment
    updateComment(id: ID!, commentText: String!): Comment
    deleteComment(id: ID!): Comment
    createTeam(name: String!): Team
    createDebate(team1Name: String!, team2Name: String!): Debate
    votes(teamId: ID!, userId: ID!): Team!
    createReply(username: String!, userId: ID!, commentId: ID!, content: String!): Reply
    updateReply(id: ID!, content: String!): Reply
    deleteReply(id: ID!): Reply
    deleteDebate(id: ID!): Debate
}
`;

module.exports = typeDefs;
