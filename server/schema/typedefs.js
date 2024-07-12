// had to take out the ! from teams in debate going to add it back in once we figure out how to create a generated id for a team

const typeDefs = `
type Team {
    _id: ID!
    name: String!
    votes: Int
    members:[User]
}

type Debate {
    _id: ID!
    team1: Team
    team2: Team
    winner: Team!
    status: String!
}

type User {
    _id: ID!
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
    _id: ID!
    comment_text: String!
    user: User!}

type Reply {
    _id: ID!
    reply_text: String!
    user: User!
    comment: Comment!

}

type Query {
    debates: [Debate]
    debate(id: ID!): Debate
    teams:[Team]
    team(id: ID!) : Team
    users: [User]
    user(id : ID!): User
    me:User
    comments:[Comment]
    comment(id:ID!):Comment
    reply:[Reply]
}

type Mutation {
    createUser(username: String!, email: String!, password:String!): User
    login(email:String!, password: String!): Auth
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User
    createComment(userId:ID!, commentText:String!):Comment
    updateComment(commentId:ID!,newCommentText:String!):Comment
    deleteComment(id: ID!): Comment
    createReply(commentId: ID!, replyText: String!): Reply
    updateReply(replyId: ID!, newReplyText: String!): Reply
    deleteReply(id: ID!): Reply
}
`;

module.exports = typeDefs;
