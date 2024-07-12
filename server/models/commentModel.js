const { Schema, model } = require('mongoose');
const { replySchema } = require('./replyModel');

const commentSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  commentText:{
    type: String,
    required:true
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  debateId:{
    type:Schema.Types.ObjectId,
    ref:"Debate"
  },
  replies: [replySchema],
}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;