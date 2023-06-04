import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
    query AllRecipes {
        allRecipes {
            _id
            title
            createdAt
            description
            image
            rating
            video
            comments {
                _id
                commentAuthor
                commentText
                createdAt
            }
            userId {
                _id
                email
                
            }
        }
    }   
`;

export const QUERY_PROFILE = gql`
    query user($userId: ID!){
        user(userId: $userId){
            username
            email
            _id
            myRecipes{
                _id
            }
        }
    }
`;

export const QUERY_ONE_RECIPE = gql`
    query oneRecipe($recipeId: ID!) {
        oneRecipe(recipeId: $recipeId) {
            title
            description
            createdAt
            userId {
                _id
            }  
        }
    }
`;
