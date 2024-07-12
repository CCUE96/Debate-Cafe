const typeDefs = `
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
}

type User {
    id: ID!
    username: String!
    email: String!
    password:String!
    debates: [Debate]
}

 
type Auth {
    token: ID!
    user:User
  }
    
type Comment {
    id: ID!
    comment_text: String!
    user: User!
    }

type Query {
    debates: [Debate]
    debate(id: ID!): Debate
    teams:[Team]
    team(id: ID!) : Team
    users: [User]
    user(id : ID!): User
    me:User
}

type Mutation {
    createUser(username: String!, email: String!, password:String!): User
    login(email:String!, password: String!): Auth
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User
    addComment(matchupId:ID!,userId:ID!, commentText:String!):Comment
    editComment(commentId:ID!,newCommentText:String!):Comment
    createTeam(name:String!):Team
    createDebate(team1: String!, team2: String!): Debate
    votes(teamId:ID!, userId: ID!):Team!

}
`;

module.exports = typeDefs;
