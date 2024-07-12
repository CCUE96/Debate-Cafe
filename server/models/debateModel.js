const { Schema, model } = require('mongoose')
const Team = require('./teamModel')

const debateSchema = new Schema({
    debateText: {
        type: String,
        required: true
    },
    team1: {
        type: Schema.Types.ObjectId,
        ref:'Team',
        // had to comment out to be able to run seed properly will uncomment once we get it working correctly
        // required: true
    },
    team2: {
        type: Schema.Types.ObjectId,
        ref:'Team',
        // required: true
    },
    team1_votes: {
        type: Number,
        default: 0
    },
    team2_votes: {
        type: Number,
        default: 0
    }
});

const Debate = model('Debate', debateSchema)

module.exports = Debate;