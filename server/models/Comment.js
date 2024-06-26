const { Schema, model } = require('mongoose')

const commentSchema = Schema ({
    comment_text: { 
    type: String,
    required: true 
},
    user: {
    // should show the user as the author of a comment
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Comment = model('Comment', commentSchema)

module.exports = Comment