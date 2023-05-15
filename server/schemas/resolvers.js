const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');

// const myUserId = "6451a917ae911a82faad7423";

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('myRecipes');
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        allRecipes: async () => {
            return Recipe.find();
        },
        oneRecipe: async (parent, { recipeId }) => {
            return Recipe.findOne({ _id: recipeId });
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("Hmm that didn't work -- Try again");
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Hmm that didn't work -- Try again");
            }
            const token = signToken(user);
            return { token, user };
        },
        createAcct: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        addRecipe: async (parent, { userId, title, image, rating, ingredients, recipeSteps, video }, context) => {
            if (context.user) {
                const recipe = await Recipe.create({ title, image, rating, ingredients, recipeSteps, video, userId: context.user._id });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { myRecipes: recipe._id } },
                );
                return recipe;
            }
            throw new AuthenticationError('Log in first')
        },
        saveRecipe: async (parent, { recipeId }, context) => {
            if (context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { myFavoriteRecipes: recipeId } },
                    { new: true }
                );
                return updateUser;
            };
        }
    }
};

module.exports = resolvers;