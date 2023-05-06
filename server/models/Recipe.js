const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true
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
        ingredients: [
            {
                type: String,
                required: true
            }
        ],
        recipeSteps: [
            {
                type: String,
                required: true
            }
        ],
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

module.exports = recipeSchema;