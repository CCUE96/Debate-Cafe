const { Schema, model } = require('mongoose');

const debateSchema = new Schema({
  team1: {
    type: Schema.Types.ObjectId,
    ref:'Team',
    required: true
  },
  team2: {
    type: Schema.Types.ObjectId,
    ref:'Team',
    required: true
  },
  winner: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  status: {
    type: String,
    enum: ['ongoing', 'finished'],
    default: 'ongoing'
  }
});

const Debate = model('Debate', debateSchema);

module.exports = Debate;
