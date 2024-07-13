const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  votes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

teamSchema.virtual('score').get(function() {
  return this.votes.length;
});

const Team = model('Team', teamSchema);

module.exports = Team;
