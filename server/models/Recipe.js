const { Schema } = require('mongoose');

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true
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
        ]
    }
);

module.exports = recipeSchema;