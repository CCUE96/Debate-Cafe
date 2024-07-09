const { Schema, model } = require('mongoose')

const commentSchema = new Schema ({
    commentText: { 
    type: String,
    required: true 
},
    user: {
const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
        min_lenth: 1,
        max_length: 250
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    userId: {

        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    replies: [replySchema],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    });


const Comment = model('Comment', commentSchema)

module.exports = Comment