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

