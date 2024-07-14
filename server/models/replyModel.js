const { Schema, model } = require('mongoose');

const replySchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  commentId: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
});

const Reply = model('Reply', replySchema);

module.exports = Reply;
