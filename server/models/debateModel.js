const { Schema, model } = require('mongoose');

const debateSchema = new Schema({
  team1: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  team2: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  status: {
    type: String,
    default: 'ongoing',
  },
  winner: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
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

const Debate = model('Debate', debateSchema);

module.exports = Debate;
