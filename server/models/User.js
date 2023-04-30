const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const recipeSchema = require('./Recipe');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Email address not valid']
        },
        password: {
            type: String,
            required: true
        },
        favoriteRecipes: [recipeSchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    };
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('recipeCount').get(function() {
    return this.favoriteRecipes.length;
});

const User = model('User', userSchema);

module.exports = User;