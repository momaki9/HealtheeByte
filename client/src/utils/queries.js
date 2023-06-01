import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
    query allRecipes{
        allRecipes{
            title
            recipeSteps
            ingredients
            userId {
                _id
            }
        }
    }
`;

export const QUERY_PROFILE = gql`
    query user($userId: ID!){
        user(userId: $userId){
            username
            email
            myRecipes{
                _id
            }
        }
    }
`;
