const { Schema, model } = require('mongoose')

const replySchema = new Schema(
    {
        replyText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 250
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

replySchema.virtual('replyCount').get(function () {
    const formattedDate = this.createdAt.toDateString('en-US')
    return formattedDate
});

module.exports = replySchema;
