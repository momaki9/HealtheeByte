const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        image: {
            type: String
        },
        rating: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        },
        description: {
            type: String,
            required: true
        },
        video: {
            type: String
        },
        comments: [
            {
                commentText: {
                    type: String,
                    required: true,
                    minlength: 1,
                    maxlength: 280
                },
                commentAuthor: {
                    type: String,
                    required: true
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (timestamp) => dateFormat(timestamp)
                }
            }
        ]
    }
);

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe;