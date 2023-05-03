const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        recipeCount: Int
        myRecipes: [Recipe]
        myFavoriteRecipes: [Recipe]
    },
    type Recipe {
        _id: ID!
        title: String!
        ingredients: [String]
        recipeSteps: [String]
    },
    input RecipeData {
        title: String!
        ingredients: [String]
        recipeSteps: [String]
    },
    type Auth {
        token: ID!
        user: User
    },
    type Query {
        users: [User]
        user(userId: ID!): User
    },
    type Mutation {
        login(email: String!, password: String!): Auth
        createAcct(username: String!, email: String!, password: String!): Auth
        addRecipe(recipeData: RecipeData!): User
        saveRecipe(recipeId: ID!): User
    }
`;

module.exports = typeDefs;