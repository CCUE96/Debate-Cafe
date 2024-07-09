const { Schema, model } = require('mongoose');

const replySchema = new Schema({
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
  commentId: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },
  content: {
    type: String,
    required: true,
  },
}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

const Reply = model('Reply', replySchema);

module.exports = { Reply, replySchema };