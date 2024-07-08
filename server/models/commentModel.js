const { Schema, model } = require('mongoose')

const commentSchema = Schema ({
    commentText: { 
    type: String,
    required: true 
},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Comment = model('Comment', commentSchema)

module.exports = Comment