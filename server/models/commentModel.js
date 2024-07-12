const { Schema, model } = require('mongoose');
const { replySchema } = require('./replyModel');
const { SchemaMetaFieldDef } = require('graphql');

const commentSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  commentText: {
    type: String,
    required: true,
  }, 
  replies: [{
    type: Schema.Types.ObjectId,
    ref: 'Reply'
  }],
}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;