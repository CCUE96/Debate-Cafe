const { Schema, model } = require('mongoose')

const matchUpSchema = new Schema({
    side1: {
        type: String,
        required: true
    },
    side2: {
        type: String,
        required: true
    },
    side1_votes: {
        type: Number,
        default: 0
    },
    side2_votes: {
        type: Number,
        default: 0
    }
});

const Matchup = model('Matchup', matchUpSchema)

module.exports = Matchup;