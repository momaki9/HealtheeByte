const { Schema, model } = require('mongoose');

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

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;