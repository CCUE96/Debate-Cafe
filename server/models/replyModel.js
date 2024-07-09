const { Schema, model } = require('mongoose');

const replySchema = new Schema({
  content: {
    type: String,
    required: true,
    maxlength: 250
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true,
  },
  id: false
});

replySchema.virtual('formattedDate').get(function () {
  return this.createdAt.toDateString();
});

const Reply = model('Reply', replySchema);

module.exports = Reply;