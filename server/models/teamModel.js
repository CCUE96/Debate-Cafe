const { Schema, model } = require('mongoose')

const teamSchema = Schema ({
    name: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
})