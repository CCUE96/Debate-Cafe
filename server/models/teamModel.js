const { Schema, model } = require('mongoose')

const teamSchema = new Schema ({
    name: {
        type: String,
        required: true
    },

    members:[{
        type:String,
        required:true,
    }],
    score:{
        type:Number,
        default:0
    votes: {
        type: Number,
        default: 0

    }
})

const Team = model('Team', teamSchema);

module.exports = Team

