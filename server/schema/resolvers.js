
const {Team, Matchup, Users} = require('../models')

const resolvers = {
    Query: {
        Matchups:async(parent,args)=>{
            try{
                const allMatchups = await Matchup.find().populate('teams')
                return allMatchups;
            }catch(error){
             console.error('error fetching matchups', error)
             throw new Error('failed to fetch matchups')
            }
        },
        Matchup: async (parent,{ id }) => {
            try{
                const singleMatchup = await Matchup.findById(id).populate('teams')
                return singleMatchup
            } catch(error){
                console.error('error fetching matchup by id',error)
                throw new Error('failed to fetch single matchup by id')
            }
        },
        Teams: async () => {
            try{
                const allTeams = await Team.find();
                return allTeams;
            }catch(error){
                console.error('error fetching teams',error)
                throw new Error('failed to fetch teams')

            }
        },
        Team: async (parent,{id}) => {
            try{
                const individualTeam = await Team.findById(id);
                return individualTeam
            }catch(error){
                console.error('error fetching team',error)
                throw new Error('failed to fetch single team by id')

            }
        },
        Users: async ()=>{
            try{
                const allUsers = await Users.find()
                    return allUsers
            }catch(error){
                console.error('cannot fetch users',error)
                throw new Error('failed to fetch all users')

            }
        },
        User: async (parent,{id})=>{
            try{
                const individualUser = await Users.findById(id)
                return individualUser
            }catch(error){
                console.error('error finding user',error)
                throw new Error('failed to fetch user by id')
            }

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
    },
    Mutation: {
        createUser: async (_, { userData }) => {
            try {
                const newUser = new Users(userData);
                await newUser.save();
                return newUser;
            } catch (error) {
                console.error('Error creating user:', error);
                throw new Error('Failed to create user');
            }
        },
        updateUser: async (_, { id, userData }) => {
            try {
                const updatedUser = await Users.findByIdAndUpdate(id, userData, { new: true });
                return updatedUser;
            } catch (error) {
                console.error('Error updating user:', error);
                throw new Error('Failed to update user');
            }
        },
        deleteUser: async (_, { id }) => {
            try {
                await Users.findByIdAndDelete(id);
                return `User with ID ${id} was successfully deleted.`;
            } catch (error) {
                console.error('Error deleting user:', error);
                throw new Error('Failed to delete user');
            }
        },
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
        //     }

    }
}



module.exports = resolvers;