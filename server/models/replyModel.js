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
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
    },
  },
  id: false,
});

const Reply = model('Reply', replySchema);

module.exports = Reply;
