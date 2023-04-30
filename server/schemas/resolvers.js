const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            const allUsers = await User.find();
            return allUsers;
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
        addRecipe: async (parent, { recipeData }, context) => {
            if (context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { myRecipes: recipeData } },
                    { new: true }
                );
                return updateUser;
            };
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