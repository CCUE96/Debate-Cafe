const { Team, Debate, User, Comment } = require("../models");
const { GraphQLError } = require('graphql'); 
const { signToken } = require('../utils/auth'); 

const resolvers = {
  Query: {
    debates: async (parent, args) => {
      try {
        const allDebates = await Debate.find().populate("Team");
        return allDebates;
      } catch (error) {
        console.error("error fetching debates", error);
        throw new Error("failed to fetch debates");
      }
    },
    debate: async (parent, { id }) => {
      try {
        const singleDebate = await Debate.findById(id).populate("team1").populate("team2");
        return singleDebate;
      } catch (error) {
        console.error("error fetching debate by id", error);
        throw new Error("failed to fetch single debate by id");
      }
    },
    teams: async () => {
      try {
        const allTeams = await Team.find().populate('votes');
        return allTeams;
      } catch (error) {
        console.error("error fetching teams", error);
        throw new Error("failed to fetch teams");
      }
    },
    team: async (parent, { id }) => {
      try {
        const individualTeam = await Team.findById(id).populate('votes'); 
        return individualTeam;
      } catch (error) {
        console.error("error fetching team", error);
        throw new Error("failed to fetch single team by id");
      }
    },
    users: async () => {
      try {
        const allUsers = await User.find();
        return allUsers;
      } catch (error) {
        console.error("cannot fetch users", error);
        throw new Error("failed to fetch all users");
      }
    },
    user: async (parent, { id }) => {
      try {
        const individualUser = await User.findById(id);
        return individualUser;
      } catch (error) {
        console.error("error finding user", error);
        throw new Error("failed to fetch user by id");
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("matchups");
      }
      throw new GraphQLError("You need to be logged in!", { 
        extensions: { code: 'UNAUTHENTICATED' },
      });
    },

    // Leaving this commented out for now because don't want to mess you up Chris
    // Comments: async () => {
    //     try {
    //         const allComments = await Comment.find();
    //         return allComments;
    //     } catch (error) {
    //         console.error('Error fetching comments:', error);
    //         throw new Error('Failed to fetch comments');
    //     }
    // },
    // Comments: async (parent, { id }) => {
    //     try {
    //         const singleComment = await Comment.findById(id);
    //         return singleComment;
    //     } catch (error) {
    //         console.error('Error fetching comment by ID:', error);
    //         throw new Error('Failed to fetch comment by ID');
    //     }
    // }
    // Leaving this commented out for further review don't want to mess up Chris on the backend
      // Reply: async () => {
      //   try {
      //     const allReplies = await Reply.find();
      //     return allReplies;
      //   } catch (error) {
      //     console.error('Error fetching replies:', error);
      //     throw new Error('Failed to fetch replies');
      //   }
      // },
      // Reply: async (parent, { id }) => {
      //   try {
      //     const singleReply = await Reply.findById(id);
      //     return singleReply;
      //   } catch (error) {
      //     console.error('Error fetching reply by ID:', error);
      //     throw new Error('Failed to fetch reply by ID');
      //   }
      // },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      try {
        const newUser = await User.create({ username, email, password });
        return newUser;
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
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
        return updatedUser;
      } catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Failed to update user");
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        await User.findByIdAndDelete(id);
        return `User with ID ${id} was successfully deleted.`;
      } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error("Failed to delete user");
      }
    },

    createDebate: async (parent, { team1, team2 }) => {
      try {
        const newDebate = await Debate.create({ team1, team2 });
        return newDebate;
      } catch (error) {
        console.error("Error creating debate:", error);
        throw new Error("Failed to create debate");
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
        );
    
        if (!updatedTeam) {
          throw new Error("Team not found");
        }
        return updatedTeam;
      } catch (error) {
        console.error("Error joining team:", error);
        throw new Error("Failed to join team");
      }
    },

    createTeam: async (parent,{ name }) =>{
      try{
        const newTeam = await Team.create({name})
        return newTeam
      }catch(error){
        console.error("Error creating team:",error)
        throw new Error("Failed to create Team")
      }
    }
  
    // Leaving this commented out for now because don't want to mess you up Chris
    // createComment: async (_, { commentData }) => {
    //     try {
    //         const newComment = new Comment(commentData);
    //         await newComment.save();
    //         return newComment;
    //     } catch (error) {
    //         console.error('Error creating comment:', error);
    //         throw new Error('Failed to create comment');
    //     }
    // },
    // updateComment: async (_, { id, commentData }) => {
    //     try {
    //         const updatedComment = await Comment.findByIdAndUpdate(id);
    //         return updatedComment;
    //     } catch (error) {
    //         console.error('Error updating comment:', error);
    //         throw new Error('Failed to update comment');
    //     }
    // },
    // deleteComment: async (_, { id }) => {
    //     try {
    //         const deletedComment = await Comment.findByIdAndDelete(id);
    //         return `Comment deleted`;
    //     } catch (error) {
    //         console.error('Error deleting comment:', error);
    //         throw new Error('Failed to delete comment');
    //     },
    // createReply: async (_, { replyData }) => {
      //     try {
      //         const newReply = new Reply(replyData);}
      //         await newReply.save();
      //        return newReply;
      //     } catch (error) {
      //         console.error('Error creating reply:', error);
      //         throw new Error('Failed to create reply');
      //     }
      // updateReply: async (_, { id, replyData }) => {
        //     try {
        //         const updatedReply = await Reply.findByIdAndUpdate
        //         return updatedReply;
        //     } catch (error) {
        //         console.error('Error updating reply:', error);
        //         throw new Error('Failed to update reply');
        //     }
        // deleteReply: async (_, { id }) => {
          //     try {
          //         const deletedReply = await Reply.findByIdAndDelete(id);
          //         return `Reply deleted`;
          //     } catch (error) {
          //         console.error('Error deleting reply:', error);
          //         throw new Error('Failed to delete reply');
          //     }
          // },
  },
};

module.exports = resolvers;
