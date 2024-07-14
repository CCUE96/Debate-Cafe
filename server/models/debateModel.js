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
  },
  id: false,
});

debateSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

const Debate = model('Debate', debateSchema);

module.exports = Debate;
