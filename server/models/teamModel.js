const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

teamSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

const Team = model('Team', teamSchema);

module.exports = Team;
