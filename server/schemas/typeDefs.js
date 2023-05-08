const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        recipeCount: Int
        myRecipes: [Recipe]
    }
    type Recipe {
        _id: ID!
        title: String!
        image: String
        rating: String
        createdAt: String
        ingredients: [String]!
        recipeSteps: [String]!
        video: String
        comments: [Comment]!
    }
    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(userId: ID!): User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        createAcct(username: String!, email: String!, password: String!): Auth
        addRecipe(title: String!, image: String, rating: String, ingredients: [String]!, recipeSteps: [String]!, video: String): User
        saveRecipe(recipeId: ID!): User
    }
`;

module.exports = typeDefs;