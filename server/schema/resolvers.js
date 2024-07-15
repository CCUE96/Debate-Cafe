const { Team, Debate, User, Comment, Reply } = require("../models");
const { GraphQLError } = require('graphql'); 
const { signToken } = require('../utils/auth'); 

const resolvers = {
  Query: {
    debates: async (parent, args) => {
      try {
        const allDebates = await Debate.find().populate('team1').populate('team2').populate({
          path: 'comments',
          populate: [
            { path: 'userId', select: 'username' },
            {
              path: 'replies',
              populate: {
                path: 'userId',
                select: 'username'
              }
            }
          ],
        });
        return allDebates.map(debate => ({
          id: debate._id.toString(),
          team1: debate.team1,
          team2: debate.team2,
          winner: debate.winner,
          status: debate.status,
          comments: debate.comments.map(comment => ({
            id: comment._id.toString(),
            commentText: comment.commentText,
            user: {
              id: comment.userId._id.toString(),
              username: comment.userId.username,
            },
            createdAt: comment.createdAt,
            replies: comment.replies.map(reply => ({
              id: reply._id.toString(),
              content: reply.content,
              createdAt: reply.createdAt,
              username: reply.username,
              userId: reply.userId._id.toString(), 
              commentId: reply.commentId.toString(),
            })),
          })),
        }));
      } catch (error) {
        console.error('error fetching debates', error);
        throw new Error('failed to fetch debates');
      }
    },
    debate: async (parent, { id }) => {
      try {
        const singleDebate = await Debate.findById(id)
          .populate('team1')
          .populate('team2')
          .populate({
            path: 'comments',
            populate: [
              { path: 'userId', select: 'username' },
              {
                path: 'replies',
                populate: {
                  path: 'userId',
                  select: 'username'
                }
              }
            ],
          });
        if (singleDebate.comments) {
          singleDebate.comments = singleDebate.comments.filter(comment => comment.userId !== null);
        }
        return {
          id: singleDebate._id.toString(),
          team1: singleDebate.team1,
          team2: singleDebate.team2,
          comments: singleDebate.comments.map(comment => ({
            id: comment._id.toString(),
            commentText: comment.commentText,
            user: {
              id: comment.userId._id.toString(),
              username: comment.userId.username,
            },
            createdAt: comment.createdAt,
            replies: comment.replies.map(reply => ({
              id: reply._id.toString(),
              content: reply.content,
              createdAt: reply.createdAt,
              username: reply.username,
              userId: reply.userId._id.toString(),
              commentId: reply.commentId.toString(),
            })),
          })),
        };
      } catch (error) {
        console.error('error fetching debate by id', error);
        throw new Error('failed to fetch single debate by id');
      }
    },
    teams: async () => {
      try {
        const allTeams = await Team.find().populate('votes');
        return allTeams.map(team => ({
          id: team._id.toString(),
          name: team.name,
          votes: team.votes.map(vote => ({
            id: vote._id.toString(),
            username: vote.username,
          })),
        }));
      } catch (error) {
        console.error("error fetching teams", error);
        throw new Error("failed to fetch teams");
      }
    },
    team: async (parent, { id }) => {
      try {
        const individualTeam = await Team.findById(id).populate('votes'); 
        return {
          id: individualTeam._id.toString(),
          name: individualTeam.name,
          votes: individualTeam.votes.map(vote => ({
            id: vote._id.toString(),
            username: vote.username,
          })),
        };
      } catch (error) {
        console.error("error fetching team", error);
        throw new Error("failed to fetch single team by id");
      }
    },
    users: async () => {
      try {
        const allUsers = await User.find();
        return allUsers.map(user => ({
          id: user._id.toString(),
          username: user.username,
          email: user.email,
        }));
      } catch (error) {
        console.error("cannot fetch users", error);
        throw new Error("failed to fetch all users");
      }
    },
    user: async (parent, { id }) => {
      try {
        const individualUser = await User.findById(id);
        return {
          id: individualUser._id.toString(),
          username: individualUser.username,
          email: individualUser.email,
        };
      } catch (error) {
        console.error("error finding user", error);
        throw new Error("failed to fetch user by id");
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id }).populate("debates");
        return {
          id: user._id.toString(),
          username: user.username,
          email: user.email,
        };
      }
      throw new GraphQLError("You need to be logged in!", { 
        extensions: { code: 'UNAUTHENTICATED' },
      });
    },
    comments: async () => {
      try {
        const allComments = await Comment.find().populate('userId');
        return allComments.map(comment => ({
          id: comment._id.toString(),
          commentText: comment.commentText,
          user: {
            id: comment.userId._id.toString(),
            username: comment.userId.username,
          },
          createdAt: comment.createdAt,
        }));
      } catch (error) {
        console.error("Error fetching comments:", error);
        throw new Error("Failed to fetch comments");
      }
    },
    comment: async (parent, { id }) => {
      try {
        const singleComment = await Comment.findById(id).populate('userId');
        return {
          id: singleComment._id.toString(),
          commentText: singleComment.commentText,
          user: {
            id: singleComment.userId._id.toString(),
            username: singleComment.userId.username,
          },
          createdAt: singleComment.createdAt,
        };
      } catch (error) {
        console.error('Error fetching comment by ID:', error);
        throw new Error('Failed to fetch comment by ID');
      }
    },
    replies: async () => {
      try {
        const allReplies = await Reply.find();
        return allReplies.map(reply => ({
          id: reply._id.toString(),
          content: reply.content,
          createdAt: reply.createdAt,
          username: reply.username,
          userId: reply.userId._id.toString(),
          commentId: reply.commentId.toString(),
        }));
      } catch (error) {
        console.error("Error fetching replies:", error);
        throw new Error("Failed to fetch replies");
      }
    },
    reply: async (parent, { id }) => {
      try {
        const singleReply = await Reply.findById(id).populate('userId');
        return {
          id: singleReply._id.toString(),
          content: singleReply.content,
          createdAt: singleReply.createdAt,
          username: singleReply.username,
          userId: singleReply.userId._id.toString(),
          commentId: singleReply.commentId.toString(),
        };
      } catch (error) {
        console.error('Error fetching reply by ID:', error);
        throw new Error('Failed to fetch reply by ID');
      }
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      try {
        const newUser = await User.create({ username, email, password });
        const token = signToken(newUser);
        return { token, user: newUser };
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
      }
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new GraphQLError("Invalid credentials", { 
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new GraphQLError("Invalid credentials", { 
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, { id, userData }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(id, userData, {
          new: true,
        });
        return {
          id: updatedUser._id.toString(),
          username: updatedUser.username,
          email: updatedUser.email,
        };
      } catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Failed to update user");
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        return {
          id: deletedUser._id.toString(),
          username: deletedUser.username,
          email: deletedUser.email,
        };
      } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error("Failed to delete user");
      }
    },
    createDebate: async (parent, { team1Name, team2Name }) => {
      try {
        const team1 = await Team.create({ name: team1Name });
        const team2 = await Team.create({ name: team2Name });
        const newDebate = await Debate.create({ team1: team1._id, team2: team2._id });
        return {
          id: newDebate._id.toString(),
          team1: team1,
          team2: team2,
        };
      } catch (error) {
        console.error("Error creating debate:", error);
        throw new Error("Failed to create debate");
      }
    },
    deleteDebate: async (parent, { id }) => {
      try {
        const deletedDebate = await Debate.findByIdAndDelete(id);
        if (!deletedDebate) {
          throw new Error(`Debate with ID ${id} not found`);
        }
        return {
          id: deletedDebate._id.toString(),
          team1: deletedDebate.team1,
          team2: deletedDebate.team2,
          status: deletedDebate.status,
        };
      } catch (error) {
        console.error("Error deleting debate:", error);
        throw new Error("Failed to delete debate");
      }
    },
    votes: async (parent, { teamId, userId }) => {
      try {
        if (!teamId || !userId) {
          throw new Error("Both teamId and userId are required");
        }
        const updatedTeam = await Team.findByIdAndUpdate(
          teamId,
          { $addToSet: { votes: userId } },
          { new: true }
        ).populate('votes');
        if (!updatedTeam) {
          throw new Error("Team not found");
        }
        return {
          id: updatedTeam._id.toString(),
          name: updatedTeam.name,
          votes: updatedTeam.votes.map(vote => ({
            id: vote._id.toString(),
            username: vote.username,
          })),
        };
      } catch (error) {
        console.error("Error joining team:", error);
        throw new Error("Failed to join team");
      }
    },
    createTeam: async (parent, { name }) => {
      try {
        const newTeam = await Team.create({ name });
        return {
          id: newTeam._id.toString(),
          name: newTeam.name,
        };
      } catch (error) {
        console.error("Error creating team:", error);
        throw new Error("Failed to create team");
      }
    },
    createComment: async (parent, { debateId, userId, commentText }) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error('User not found');
        }
        const newComment = new Comment({
          debateId,
          userId,
          username: user.username,
          commentText,
          createdAt: new Date(),
        });
        const savedComment = await newComment.save();
        await Debate.findByIdAndUpdate(debateId, { $push: { comments: savedComment._id } });
        return {
          id: savedComment._id.toString(),
          commentText: savedComment.commentText,
          user: {
            id: user._id.toString(),
            username: user.username,
          },
          createdAt: savedComment.createdAt,
        };
      } catch (error) {
        console.error("Error creating comment:", error);
        throw new Error("Failed to create comment");
      }
    },
    updateComment: async (_, { id, commentText }) => {
      try {
        const updatedComment = await Comment.findByIdAndUpdate(
          id,
          { commentText },
          { new: true }
        ).populate('userId', 'username'); 
        if (!updatedComment) {
          throw new Error(`Comment with ID ${id} not found`);
        }
        return {
          id: updatedComment._id.toString(),
          commentText: updatedComment.commentText,
          createdAt: updatedComment.createdAt,
          user: {
            id: updatedComment.userId._id.toString(),
            username: updatedComment.userId.username,
          }
        };
      } catch (error) {
        console.error("Error updating comment:", error);
        throw new Error("Failed to update comment");
      }
    },
    deleteComment: async (parent, { id }) => {
      try {
        console.log(`Attempting to delete comment with ID: ${id}`);
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
          throw new Error(`Comment with ID ${id} not found`);
        }
        console.log('Deleted comment:', deletedComment);
        return {
          id: deletedComment._id.toString(),
          commentText: deletedComment.commentText,
          createdAt: deletedComment.createdAt,
          user: {
            id: deletedComment.userId._id.toString(),
            username: deletedComment.username,
          },
        };
      } catch (error) {
        console.error("Error deleting comment:", error);
        throw new Error("Failed to delete comment");
      }
    },    
    createReply: async (parent, { username, userId, commentId, content }) => {
      try {
        console.log("Starting createReply mutation");
        console.log("Finding user with ID:", userId);
        const user = await User.findById(userId);
        if (!user) {
          console.error("User not found");
          throw new Error('User not found');
        }
        console.log("User found:", user);
        console.log("Finding comment with ID:", commentId);
        const comment = await Comment.findById(commentId);
        if (!comment) {
          console.error("Comment not found");
          throw new Error('Comment not found');
        }
        console.log("Comment found:", comment);
        console.log("Creating new reply");
        const newReply = new Reply({
          createdAt: new Date(),
          username,
          userId,
          commentId,
          content
        });
        console.log("Saving new reply");
        const savedReply = await newReply.save();
        console.log("Reply saved:", savedReply);
        console.log("Adding reply to comment's replies array");
        comment.replies.push(savedReply._id);
        await comment.save();
        console.log("Comment updated with new reply");
        console.log("Reply created successfully");
        return {
          id: savedReply._id.toString(),
          createdAt: savedReply.createdAt,
          username: savedReply.username,
          content: savedReply.content,
          userId: user._id.toString(),
          commentId: comment._id.toString()
        };
      } catch (error) {
        console.error("Error creating reply:", error);
        throw new Error("Failed to create reply");
      }
    },
    updateReply: async (parent, { id, content }) => {
      try {
        const updatedReply = await Reply.findByIdAndUpdate(id, { content }, { new: true });
        if (!updatedReply) {
          throw new Error(`Reply with ID ${id} not found`);
        }
        return {
          id: updatedReply._id.toString(),
          content: updatedReply.content,
          createdAt: updatedReply.createdAt,
        };
      } catch (error) {
        console.error("Error updating reply:", error);
        throw new Error("Failed to update reply");
      }
    },
    deleteReply: async (parent, { id }) => {
      try {
        console.log(`Attempting to delete reply with ID: ${id}`);
        const deletedReply = await Reply.findByIdAndDelete(id);
        if (!deletedReply) {
          throw new Error(`Reply with ID ${id} not found`);
        }
        const verifyDeletion = await Reply.findById(id);
        if (verifyDeletion) {
          throw new Error(`Failed to delete reply with ID ${id}`);
        }
        console.log('Deleted reply:', deletedReply);
        return {
          id: deletedReply._id.toString(),
          content: deletedReply.content,
          createdAt: deletedReply.createdAt,
          username: deletedReply.username,
          userId: deletedReply.userId.toString(),
          commentId: deletedReply.commentId.toString()
        };
      } catch (error) {
        console.error("Error deleting reply:", error);
        throw new Error("Failed to delete reply");
      }
    }
  }
};

module.exports = resolvers;
