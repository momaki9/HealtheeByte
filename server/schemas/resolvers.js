const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');

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
        addRecipe: async (parent, { title, image, rating, description, video }, context) => {
            if (context.user) {
                const recipe = await Recipe.create({ title, image, rating, description, video});
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { myRecipes: recipe._id } },
                );
                return recipe;
            }
            throw new AuthenticationError('Log in first')
        },
        deleteRecipe: async (parent, {recipeId}) => {
            return Recipe.findOneAndDelete({ _id: recipeId})
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
        },
        updateRecipe: async (parent, {recipeId, title, description, image, video}) => {
            return await Recipe.findByIdAndUpdate(
                {_id: recipeId},
                {
                    title: title,
                    description: description,
                    image: image,
                    video: video
                },
                { new: true}
            )
        }
    }
};

module.exports = resolvers;